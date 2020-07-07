<template>
  <section class="text-center container mx-auto">
    <n-link to="/about">
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-4 rounded"
        @click="deleteDetailTask"
      >
        About
      </button>
    </n-link>
    <List
      :tasks="tasks"
      @task-add="addTask"
      @list-task-delete="deleteTask"
      @drag-task="dragTask"
    />
  </section>
</template>

<script>
import List from '~/components/list.vue'
import taskStorage from '~/store/index'

export default {
  components: {
    List
  },
  data() {
    return {
      tasks: []
    }
  },
  watch: {
    tasks: {
      handler(tasks) {
        taskStorage.save(tasks)
      },
      deep: true
    }
  },
  created() {
    this.tasks = taskStorage.fetch()
  },
  methods: {
    addTask(newTaskTitle, id) {
      if (newTaskTitle !== '') {
        this.tasks.push({
          title: newTaskTitle,
          id: id
        })
      }
    },
    deleteTask(task) {
      const index = this.tasks.indexOf(task)
      this.tasks.splice(index, 1)
    },
    dragTask(tasks) {
      this.tasks = tasks
    }
  }
}
</script>
