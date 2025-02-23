<template>
  <sdPageHeader title="Kanban">
    <template #buttons>
      <div key="1" class="page-header-actions">
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
    <a-row :gutter="15">
      <a-col :xs="24">
        <KanvanBoardWrap>
          <sdCards headless title="Product Design">
            <draggable
              v-model="dragAbleBoardData"
              :component-data="getComponentData()"
              tag="div"
              handle=".handle"
              item-key="boardId"
            >
              <template #item="{ element }">
                <div class="sDash_kanban-board-item">
                  <perfect-scrollbar
                    :options="{
                      wheelSpeed: 2,
                      swipeEasing: true,
                      suppressScrollX: true,
                    }"
                  >
                    <div class="sDash_kanban-board-item-scrolable">
                      <div
                        :class="
                          element.boardId === titleBoardId
                            ? 'sDash_kanban-board-item__header editable'
                            : 'sDash_kanban-board-item__header'
                        "
                      >
                        <h4 class="list-header-title">
                          <span><sdFeatherIcons type="menu" class="handle" /> {{ element.title }}</span>
                          <sdDropdown :action="['click']" class="wide-dropdwon kanbanCard-more">
                            <template #overlay>
                              <a @click="(e) => onBoardEditable(e, element.boardId, element.title)" href="#">
                                <span>Edit Card Title</span>
                              </a>
                              <a @click="() => deleteColumnHandler(element.boardId)" href="#">
                                <span>Delete Card</span>
                              </a>
                            </template>
                            <a href="#" class="btn-more">
                              <sdFeatherIcons type="more-horizontal" size="14" />
                            </a>
                          </sdDropdown>
                        </h4>
                        <BoardTitleUpdate
                          :boardId="element.boardId"
                          :boardTitle="boardTitle"
                          :onBlur="onBoardEditableHide"
                        />
                      </div>

                      <div class="sDash_kanvan-task">
                        <TaskItem
                          :id="element.boardId"
                          :taskId="taskId"
                          :onBackShadow="onBackShadow"
                          :onTaskTitleUpdate="onTaskTitleUpdate"
                          :onTaskTitleDelete="onTaskTitleDelete"
                          :showModal="showModal"
                        />
                      </div>

                      <div
                        :class="
                          element.boardId === boardId ? 'sDash_addTask-control add-task-on' : 'sDash_addTask-control'
                        "
                      >
                        <a href="#" class="btn-addTask" @click="(e) => handleOnAddTask(e, element.boardId)">
                          <sdFeatherIcons type="plus" size="12" />
                          <span>Add Task</span>
                        </a>

                        <div class="sDash_addTask-from">
                          <a-input
                            :name="`taskInput-${element.boardId}`"
                            class="sDash_addTask-input"
                            placeholder="Enter a Title"
                            @pressEnter="() => addTaskHandler(element.boardId)"
                          />
                          <div class="sDash_addTask-action">
                            <sdButton
                              @click="() => addTaskHandler(element.boardId)"
                              class="add-column"
                              htmlType="submit"
                              size="small"
                              type="primary"
                            >
                              Add
                            </sdButton>
                            <a href="#" @click="handleOffAddTask">
                              <sdFeatherIcons type="x" size="18" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </perfect-scrollbar>
                </div>
              </template>
              <template #footer>
                <div :class="addColumn ? 'btn-addColumn add-column-on' : 'btn-addColumn'">
                  <div class="btn-addColumn-inner">
                    <a href="#" class="btn-add" @click="activeAddOption">
                      <sdFeatherIcons type="plus" size="12" />
                      <span>Add Column</span>
                    </a>
                    <a-form class="addColumn-form" :model="formState" name="columnAdd" @finish="addColumnHandler">
                      <div class="btn-addColumn-form">
                        <a-input
                          v-model:value="columnTitle"
                          class="sDash-add-column-input"
                          @change="onColumnTitleChange"
                          placeholder="Enter Column Title"
                        />
                        <div class="sDash_add-column-action">
                          <sdButton class="add-column" htmlType="submit" size="small" type="primary"> Add </sdButton>
                          <a href="#" @click="diActiveAddOption">
                            <sdFeatherIcons type="x" size="18" />
                          </a>
                        </div>
                      </div>
                    </a-form>
                  </div>
                </div>
              </template>
            </draggable>
          </sdCards>
        </KanvanBoardWrap>
      </a-col>
    </a-row>
  </Main>
  <UpdateTask :handleCancel="handleCancel" :modalVisible="modalVisible" :data="checklistData" />
  <BackShadow v-if="backShadow" @click="onBackShadowHide" />
</template>
<script>
import { KanvanBoardWrap, BackShadow } from './style';
import KanbanBoardItem from './overview/KanbanBoardItem';
import UpdateTask from './overview/UpdateTask';
import { Main } from '../../styled';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import { toRefs, ref, computed, reactive } from 'vue';
import { useStore } from 'vuex';
import draggable from 'vuedraggable';
import BoardTitleUpdate from './overview/BoardTitleUpdate.vue';
import TaskItem from './overview/TaskItem';

const Kanban = {
  name: 'Kanban',
  components: {
    KanvanBoardWrap,
    BackShadow,
    Main,
    BoardTitleUpdate,
    KanbanBoardItem,
    UpdateTask,
    draggable,
    TaskItem,
    PerfectScrollbar,
  },
  setup() {
    const { state, dispatch } = useStore();
    const rtl = computed(() => state.themeLayout.rtlData);
    const boardData = computed(() => state.KanbanBoard.boardData);

    const tasks = computed(() => state.KanbanBoard.taskData);
    // const tasks = ref(tasksData.value);
    const addColumn = ref(false);

    const formState = reactive({});
    const states = reactive({
      formState,
      columnTitle: '',
      boardTitle: '',
      boardId: '',
      titleBoardId: '',
      checklistData: {
        id: 1,
        boardId: 1,
        checklist: [],
      },
      modalVisible: false,
      boardEditable: false,
      backShadow: false,
      taskId: '',
    });

    const activeAddOption = (e) => {
      e.preventDefault();
      addColumn.value = true;
    };

    const diActiveAddOption = (e) => {
      e.preventDefault();
      addColumn.value = false;
    };
    const onColumnTitleChange = (e) => {
      state.columnTitle = e.target.value;
    };
    const handleOnAddTask = (e, id) => {
      e.preventDefault();
      states.boardId = id;
    };
    const handleOffAddTask = (e) => {
      e.preventDefault();
      states.boardId = '';
    };
    const onBackShadow = (id) => {
      states.backShadow = true;
      states.taskId = id;
    };
    const onBackShadowHide = () => {
      states.backShadow = false;
      states.taskId = '';
    };
    const onTaskTitleUpdate = (value, id) => {
      tasks.value.map((task) => {
        if (task.id === id) {
          task.title = value;
          states.backShadow = false;
          states.taskId = '';
        }
        return task;
      });
      dispatch('ToAddTask', tasks.value);
    };
    const onTaskTitleDelete = (e, id) => {
      e.preventDefault();
      const afterDeleteTask = tasks.value.filter((task) => task.id !== id);
      states.backShadow = false;
      states.taskId = '';
      dispatch('ToDeleteTask', afterDeleteTask);
    };

    const addTaskHandler = (id) => {
      const arrayData = [];
      const taskItem = document.querySelector(`input[name="taskInput-${id}"]`).value;
      tasks.value.map((data) => {
        return arrayData.push(data.id);
      });
      const max = Math.max(...arrayData);
      console.log(max);
      if (taskItem !== '') {
        dispatch('ToAddTask', [
          ...tasks.value,
          {
            id: `${max + 1}`,
            boardId: states.boardId,
            title: taskItem,
            checklist: [],
          },
        ]);
        states.boardId = '';
      } else {
        alert('Please Enter a Task Ttile');
      }
    };

    const addColumnHandler = () => {
      const arrayData = [];
      boardData.value.map((data) => {
        return arrayData.push(data.boardId);
      });
      const max = Math.max(...arrayData);
      if (states.columnTitle !== '') {
        dispatch('ToAddBoard', [
          ...boardData.value,
          {
            boardId: max + 1,
            title: states.columnTitle,
          },
        ]);
        states.columnTitle = '';
        addColumn.value = false;
      } else {
        alert('Please Enter a Column Ttile');
      }
    };

    const showModal = (dataList) => {
      states.modalVisible = !states.modalVisible;
      states.checklistData = dataList;
    };

    const onBoardEditable = (e, id, title) => {
      e.preventDefault();
      states.boardEditable = true;
      states.boardTitle = title;
      states.titleBoardId = id;
    };

    const onBoardEditableHide = (id) => {
      boardData.value.map((board) => {
        if (board.boardId === id) {
          console.log(document.querySelector(`input[name="titile-edit${id}"]`));
          board.title = document.querySelector(`input[name="titile-edit${id}"]`).value;
        }
        return board;
      });
      dispatch('ToAddBoard', boardData.value);
      states.boardEditable = false;

      states.titleBoardId = '';
    };
    const deleteColumnHandler = (id) => {
      const afterDeleteData = boardData.value.filter((board) => board.boardId !== id);
      const confirm = window.confirm('Are You sure to delete this?');
      if (confirm) {
        dispatch('ToAddBoard', afterDeleteData);
      }
      return false;
    };
    const handleCancel = () => {
      states.modalVisible = false;
    };
    function getComponentData() {
      return {
        class: 'sDash_kanban-board-list',
      };
    }
    const log = (evt) => {
      console.log(evt);
    };
    return {
      log,
      getComponentData,
      handleCancel,
      deleteColumnHandler,
      onBoardEditableHide,
      onBoardEditable,
      showModal,
      addColumnHandler,
      addTaskHandler,
      onTaskTitleDelete,
      onBackShadow,
      onTaskTitleUpdate,
      onBackShadowHide,
      handleOffAddTask,
      handleOnAddTask,
      activeAddOption,
      rtl,
      boardData,
      tasks,
      addColumn,
      states,
      ...toRefs(states),
      onColumnTitleChange,
      diActiveAddOption,
    };
  },
  computed: {
    dragAbleBoardData: {
      get() {
        return this.$store.state.KanbanBoard.boardData;
      },
      set(value) {
        this.$store.dispatch('ToAddBoard', value);
      },
    },
  },
};
export default Kanban;
</script>
