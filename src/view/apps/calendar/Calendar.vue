<template>
  <sdPageHeader title="Calendar"
    ><template v-slot:buttons>
      <div class="page-header-actions">
        <sdCalendarButton />
        <sdExportButton />
        <sdShareButton />
        <sdButton size="small" type="primary">
          <sdFeatherIcons type="plus" size="14" />
          Add New
        </sdButton>
      </div>
    </template>
  </sdPageHeader>

  <Main>
    <CalendarWrapper>
      <a-row :gutter="25">
        <a-col :xxl="6" :xl="9" :xs="24">
          <Aside>
            <sdButton @click="onHandleVisible" class="btn-create" size="large" type="secondary">
              <sdFeatherIcons type="plus" size="14" /> <span>Create New Event</span>
            </sdButton>
            <div class="calendar-display">
              <v-calendar is-expanded v-model="date" />
            </div>
            <br />
            <sdCards headless>
              <h3 class="listHeader">
                My Calendars
                <a @click="onHandleVisible" class="add-label" to="#">
                  <sdFeatherIcons type="plus" size="14" />
                </a>
              </h3>
              <ul class="event-list">
                <li v-for="{ id, title, label } in events" :key="id">
                  <a to="#">
                    <span :class="`bullet ${label}`" />
                    {{ title }}
                  </a>
                </li>
              </ul>
            </sdCards>
          </Aside>
        </a-col>
        <a-col :xxl="18" :xl="15" :xs="24"> <router-view name="child"></router-view> </a-col>
      </a-row>
    </CalendarWrapper>
  </Main>
</template>
<script>
import { Aside, CalendarWrapper } from './Style';
import { Main } from '../../styled';
import { useStore } from 'vuex';
import { computed, reactive, ref } from 'vue';
import './overview/style.css';
import 'v-calendar/dist/style.css';

const Calendars = {
  name: 'Calendars',
  components: { Aside, CalendarWrapper, Main },
  setup() {
    const { state, dispatch } = useStore();
    const isVisible = computed(() => state.calendar.eventVisible);
    const events = computed(() => state.calendar.events);
    const date = ref(new Date());
    const visible = ref(false);
    const onChange = (dt) => (date.value = dt);
    const onHandleVisible = () => {
      dispatch('eventVisible', !isVisible.value);
    };
    const calendarData = reactive({});
    const calendarConfigs = reactive({
      sundayStart: false,
      dateFormat: 'dd/mm/yyyy',
      isDatePicker: false,
      isDateRange: false,
    });
    return {
      onHandleVisible,
      onChange,
      date,
      events,
      isVisible,
      visible,
      calendarData,
      calendarConfigs,
    };
  },
};

export default Calendars;
</script>
