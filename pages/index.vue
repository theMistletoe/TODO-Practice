<template>
  <section class="container mx-auto">
    <List :tasks="tasks" @task-add="addTask" @list-task-delete="deleteTask" />
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
    addTask(newTaskTitle) {
      if (newTaskTitle !== '') {
        this.tasks.push({
          title: newTaskTitle
        })
      }
    },
    deleteTask(task) {
      const index = this.tasks.indexOf(task)
      this.tasks.splice(index, 1)
    }
  }
}
</script>
