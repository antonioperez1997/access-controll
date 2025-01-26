<template>
    <VueDraggableNext
        :data-boardId="id"
        @end="checkMove"
        class="dragArea list-group w-full"
        v-model="taskData"
        item-key="id"
        group="people"
    >
        <div
            class="list-group-item sDash_kanvan-task__single"
            v-for="element in taskData.filter(
                (item) => item.boardId === this.id
            )"
            :key="element.id"
            :data-keyId="element.id"
        >
            <KanbanBoardItem
                :taskId="taskId"
                :onBackShadow="onBackShadow"
                :onTaskTitleUpdate="onTaskTitleUpdate"
                :onTaskTitleDelete="onTaskTitleDelete"
                :showModal="showModal"
                :data="element"
            />
        </div>
    </VueDraggableNext>
</template>
<script>
import { VueDraggableNext } from 'vue-draggable-next';
import KanbanBoardItem from './KanbanBoardItem';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: 'TaskItem',
    components: { VueDraggableNext, KanbanBoardItem },
    props: [
        'id',
        'taskId',
        'onBackShadow',
        'onTaskTitleUpdate',
        'onTaskTitleDelete',
        'showModal',
    ],
    setup() {
        const store = useStore();
        function checkMove(state) {
            const boardId = state.to.getAttribute('data-boardId');
            const keyId = state.item.getAttribute('data-keyId');

            const data = store.state.KanbanBoard.taskData.map((item) => {
                if (item.id == keyId) {
                    item.boardId = boardId;
                }
                return item;
            });

            store.dispatch('ToAddTask', data);
        }
        return {
            checkMove,
        };
    },
    computed: {
        taskData: {
            get() {
                return this.$store.state.KanbanBoard.taskData;
            },
        },
    },
});
</script>
