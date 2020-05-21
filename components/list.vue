<template>
  <div class="text-center container mx-auto">
    <h1 class="font-semibold text-4xl text-blue-500">
      ＴＯ ＤＯ リスト
    </h1>
    <input
      ref="inputTask"
      v-model="newTaskTitle"
      class="shadow appearance-none border rounded py-2 px-3 text-gray-600 my-4"
      type="text"
      name="task-title"
      @keydown.enter="addTask"
    />
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="addTask"
    >
      追加
    </button>

    <ul>
      <li
        v-for="task in tasks"
        class="py-2 px-8 border border-gray-400 text-gray-600 mx-auto w-1/2 text-left flex"
      >
        <input
          ref="inputTitle"
          v-model="task.title"
          type="text"
          @keydown.enter="focusOut(task)"
          class="inline-block flex-auto px-2 py-2 block focus:shadow appearance-none focus:border focus:rounded text-gray-600 w-1/2 mx-auto"
        />
        <button
          class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="displayDetail(task)"
        >
          詳細
        </button>
        <button
          class="inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded"
          @click="deleteListTask(task)"
        >
          削除
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['tasks'],
  data: () => ({
    newTaskTitle: '',
    index: ''
  }),
  methods: {
    addTask(clickevent) {
      this.$emit('task-add', this.newTaskTitle)
      this.newTaskTitle = ''
      this.$refs.inputTask.focus()
    },
    displayDetail(task) {
      this.$emit('task-button-click', task)
    },
    focusOut(task) {
      this.index = this.tasks.indexOf(task)
      this.$refs.inputTitle[this.index].blur()
    },
    deleteListTask(task) {
      this.$emit('list-task-delete', task)
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
