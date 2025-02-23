<template>
  <Style
    class="table-responsive"
    :rowSelection="rowSelection"
    :pagination="false"
    :columns="columns"
    :dataSource="data"
    @change="handleChange"
  >
  </Style>
</template>
<script lang="jsx">
import { Style, EmailAuthor, EmailHeader } from './style';
import Topbar from './Topbar';
import { textRefactor } from '../../../../components/utilities/utilities';
import VueTypes from 'vue-types';
import { useStore } from 'vuex';
import { computed, ref, toRefs } from 'vue';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';

const Content = {
  name: 'Content',
  components: { Style, EmailAuthor, EmailHeader, Topbar },
  props: {
    searchData: VueTypes.arrayOf(VueTypes.object).isRequired,
    email: VueTypes.arrayOf(VueTypes.object).isRequired,
  },
  setup(props) {
    const { state, dispatch } = useStore();
    const rtl = computed(() => state.themeLayout.rtlData);
    const { email, searchData } = toRefs(props);
    const emails = computed(() => email.value);

    const selectedRowKeys = ref([]);
    const notData = ref(searchData);
    const sort = ref(false);
    const sortedInfo = ref([]);

    const onHandleSort = (e) => {
      e.preventDefault();
      sort.value = !sort.value;
      if (sort.value) {
        dispatch('onSortingAscending');
      } else {
        dispatch('onSortingDescending');
      }
    };
    const refreshState = (e) => {
      e.preventDefault();
      emails.value = email;
    };

    const onStaredChange = (id) => {
      dispatch('onStarUpdate', id);
    };

    const columns = computed(() => [
      {
        title: <Topbar refreshState={refreshState} />,
        dataIndex: 'name',
      },
      {
        title: (
          <div class="email-top-search">
            <sdAutoComplete placeholder="Search mail" dataSource={searchData.value} width="80%" patterns />
          </div>
        ),
        dataIndex: 'content',
      },
      {
        title: (
          <>
            <div class="email-top-right d-flex align-items-center">
              <span class="page-number">1 - 50 of 235</span>
              <div class="pagination-slider">
                <router-link class="btn-paging" to="#">
                  <sdFeatherIcons type={!rtl.value ? 'chevron-left' : 'chevron-right'} size="14" />
                </router-link>
                <router-link class="btn-paging" to="#">
                  <sdFeatherIcons type={rtl.value ? 'chevron-left' : 'chevron-right'} size="14" />
                </router-link>
              </div>
              <div class="email-extra">
                <router-link onClick={onHandleSort} to="#">
                  <sdFeatherIcons type="sliders" size={16} />
                </router-link>
                <sdDropdown
                  overlay={
                    <>
                      <router-link to="#">
                        <span>Newest</span>
                      </router-link>
                      <router-link to="#">
                        <span>Oldest</span>
                      </router-link>
                      <router-link to="#">
                        <span>Unread</span>
                      </router-link>
                    </>
                  }
                >
                  <router-link to="#">
                    <sdFeatherIcons type="more-vertical" size={18} />
                  </router-link>
                </sdDropdown>
              </div>
            </div>
          </>
        ),
        dataIndex: 'time',
        key: 'time',
      },
    ]);

    const data = computed(() =>
      emails.value.map((inbox, key) => {
        const { userName, email, status, type, id, img, subject, body, attach, stared } = inbox;
        const same = dayjs(id).format('MM-DD-YYYY') === dayjs().format('MM-DD-YYYY');
        return {
          key: id,
          name: (
            <EmailAuthor>
              <router-link
                onClick={(e) => {
                  e.preventDefault();
                  onStaredChange(id);
                }}
                to="#"
                class={stared ? 'starActive' : 'starDeactivate'}
              >
                <font-awesome-icon icon={faStar} size="1x" style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
              </router-link>
              <img src={require(`../../../../static/img/chat-author/${img}`)} alt="" />
              <sdHeading as="h5">
                <a>{userName}</a>
              </sdHeading>
            </EmailAuthor>
          ),
          email,
          status,
          content: (
            <EmailHeader>
              <sdHeading as="h5">
                <router-link to={`/app/mail-single/${id}`}>{subject}</router-link>
                <span class={`mail-badge ${key <= 1 ? 'primary' : ''}`}>{type}</span>
              </sdHeading>
              <p>{textRefactor(body, 10)}</p>
              {attach.length
                ? attach.map((item) => (
                    <a
                      key={item}
                      class="btn-attachment"
                      download
                      href={require(`../../../../static/img/email/${item}`)}
                    >
                      <sdFeatherIcons type="paperclip" size={14} />
                      {item}
                    </a>
                  ))
                : null}
            </EmailHeader>
          ),
          time:<span class="email-time">{same ? dayjs(id).format('hh:mm A') : dayjs(id).format('MMM D, YYYY')}</span>
        };
      }),
    );

    const handleChange = (_, __, sorter) => {
      sortedInfo.value = sorter;
    };

    const onRowSelection = (filterObj) => {
      const { filter, byValue } = filterObj;

      const newSelectedRowKeys = emails.value
        .filter((value) => {
          return value[filter] === byValue;
        })
        .map((item) => item.id);
      selectedRowKeys.value = newSelectedRowKeys;
    };

    const onSelectChange = (selectedRowKey) => {
      selectedRowKeys.value = selectedRowKey;
    };

    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
      hideDefaultSelections: true,
      selections: [
        {
          key: 'all',
          text: 'All',
          onSelect: () => {
            const newSelectedRowKeys = email.map((item) => item.id);
            selectedRowKeys.value = newSelectedRowKeys;
          },
        },
        {
          key: 'read',
          text: 'Read',
          onSelect: onRowSelection.bind(null, { filter: 'status', byValue: 'read' }),
        },
        {
          key: 'unread',
          text: 'Unread',
          onSelect: onRowSelection.bind(null, { filter: 'status', byValue: 'unread' }),
        },
        {
          key: 'stared',
          text: 'Stared',
          onSelect: onRowSelection.bind(null, { filter: 'stared', byValue: true }),
        },
        {
          key: 'unstared',
          text: 'Unstared',
          onSelect: onRowSelection.bind(null, { filter: 'status', byValue: false }),
        },
      ],
    };

    return {
      rtl,
      selectedRowKeys,
      notData,
      emails,
      sort,
      data,
      columns,
      rowSelection,
      refreshState,
      onStaredChange,
      onHandleSort,
      handleChange,
    };
  },
};

export default Content;
</script>
