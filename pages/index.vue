<template>
  <section class="container mx-auto">
    <List
      v-if="currentView === 'list'"
      :tasks="tasks"
      @task-button-click="displayDetail"
      @task-add="addTask"
      @list-task-delete="deleteTask"
    />
    <Detail
      v-if="currentView === 'detail'"
      :selected-task="selectedTask"
      @back-button-click="displayList"
      @detail-task-delete="deleteTask"
    />
  </section>
</template>

<script>
import List from '~/components/list.vue'
import Detail from '~/components/detail.vue'

export default {
  components: {
    List,
    Detail
  },
  data() {
    return {
      currentView: 'list',
      tasks: [
        {
          title: '仮タスクタイトル1',
          detail: '仮タスクタイトル1詳細'
        },
        {
          title: '仮タスクタイトル2',
          detail: '仮タスクタイトル2詳細'
        },
        {
          title: '仮タスクタイトル3',
          detail: '仮タスクタイトル3詳細'
        },
        {
          title: '仮タスクタイトル4',
          detail: '仮タスクタイトル4詳細'
        }
      ],
      selectedTask: { title: '', detail: '' }
    }
  },
  methods: {
    addTask(newTaskTitle) {
      if (newTaskTitle !== '') {
        this.tasks.push({
          title: newTaskTitle
        })
      }
    },
    displayList() {
      this.currentView = 'list'
    },
    displayDetail(task) {
      this.selectedTask = task
      this.currentView = 'detail'
    },
    deleteTask(task) {
      const index = this.tasks.indexOf(task)
      this.tasks.splice(index, 1)
    }
  }
}
</script>
