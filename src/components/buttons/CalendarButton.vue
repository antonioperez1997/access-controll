<template>
    <CustomDropDown id="dropdownParent">
        <div
            v-if="isVisible"
            class="sDash-range-calendar"
            placement="bottomRight"
            title="Search by Calendar"
            action="click"
        >
            <v-calendar
                :columns="$screens({ default: 1, lg: 2 })"
                is-expanded
                v-model="range"
                is-range
            />
        </div>
        <sdButton @click="handleVisible" size="small" type="white">
            <sdFeatherIcons type="calendar" size="14" />
            <span>Calendar</span>
        </sdButton>
    </CustomDropDown>
</template>

<script>
import { onMounted, ref, defineComponent } from 'vue';
import { CustomDropDown } from './styled';

export default defineComponent({
    name: 'CalendarButton',
    components: {
        CustomDropDown,
    },
    setup() {
        const isVisible = ref(false);
        const handleVisible = () => {
            isVisible.value = !isVisible.value;
        };
        const range = {
            start: new Date(2021, 0, 1),
            end: new Date(2021, 0, 5),
        };
        onMounted(() => {
            document.body.addEventListener('click', (e) => {
                if (e.target.closest('#dropdownParent')) {
                    return false;
                } else {
                    isVisible.value = false;
                }
            });
        });

        return {
            handleVisible,
            isVisible,
            range,
        };
    },
});
</script>

<style>
.ant-page-header-heading {
    overflow: visible;
}
</style>
