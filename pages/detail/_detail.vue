<template>
  <div class="text-center container mx-auto">
    <h1 class="font-semibold text-4xl text-blue-500">
      ＴＯ ＤＯ リスト詳細
    </h1>
    <input
      v-model="selectedTask.title"
      class="block shadow appearance-none border rounded py-2 px-3 text-gray-600 my-4 w-1/2 mx-auto"
      type="text"
    />
    <textarea
      v-model="selectedTask.detail"
      class="block shadow appearance-none border rounded py-2 px-3
    text-gray-600 my-4 w-1/2 h-64 mx-auto"
    />
    <n-link to="/">
      <button
        to="/"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        戻る
      </button>
    </n-link>
    <n-link to="/">
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-4 rounded"
        @click="deleteDetailTask"
      >
        削除
      </button>
    </n-link>
  </div>
</template>

<script>
import taskStorage from '~/store/index'

export default {
  data() {
    return {
      tasks: [],
      selectedTask: { title: '', detail: '' }
    }
  },
  computed: {
    detail() {
      return this.$route.params.detail
    }
  },
  watch: {
    tasks: {
      handler(tasks) {
        console.log('watch_detail')
        taskStorage.save(tasks)
        console.log(tasks)
        console.log('saved')
      },
      deep: true
    }
  },
  created() {
    console.log(this.$route.params.detail)
    this.tasks = taskStorage.fetch()
    this.selectedTask = this.tasks[this.$route.params.detail]
    console.log(this.selectedTask)
  },
  methods: {
    deleteDetailTask(clickevent) {
      console.log('deleteTasks_start')
      console.log(this.tasks)
      const index = this.tasks.indexOf(this.selectedTask)
      this.tasks.splice(index, 1)
      taskStorage.save(this.tasks)
      console.log(this.tasks)
      console.log('deleteTasks_end')
    }
  }
}
</script>

<style></style>
