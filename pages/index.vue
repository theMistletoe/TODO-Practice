<template>
  <section class="container mx-auto">
    <List
      v-if="currentView === 'list'"
      @task-button-click="displayDetail"
      @task-add="addTask"
      :tasks="tasks"
    />
    <Detail v-if="currentView === 'detail'" @back-button-click="displayList" />
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
        { title: '仮タスクタイトル1', detail: '仮タスクタイトル1詳細' },
        { title: '仮タスクタイトル2', detail: '仮タスクタイトル2詳細' },
        { title: '仮タスクタイトル3', detail: '仮タスクタイトル3詳細' },
        { title: '仮タスクタイトル4', detail: '仮タスクタイトル4詳細' }
      ]
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
    displayDetail() {
      this.currentView = 'detail'
    }
  }
}
</script>
