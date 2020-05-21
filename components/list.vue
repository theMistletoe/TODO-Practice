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
        <div
          v-if="!task.edit"
          v-text="task.title"
          v-on:click="task.edit = true"
          class="inline-block flex-auto py-2"
        ></div>
        <input
          v-if="task.edit"
          v-auto-focus
          type="text"
          v-model="task.title"
          @blur="task.edit = false"
          @keydown.enter="task.edit = false"
          class="inline-block flex-auto px-2 py-2 block shadow appearance-none border rounded text-gray-600 w-1/2 mx-auto"
        />
        <button
          class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="displayDetail(task)"
        >
          詳細
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['tasks'],
  data: () => ({
    newTaskTitle: ''
  }),
  methods: {
    addTask(clickevent) {
      this.$emit('task-add', this.newTaskTitle)
      this.newTaskTitle = ''
      this.$refs.inputTask.focus()
    },
    displayDetail(task) {
      this.$emit('task-button-click', task)
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
