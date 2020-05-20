<template>
  <div class="text-center container mx-auto">
    <h1 class="font-semibold text-4xl text-blue-500">
      ＴＯ ＤＯ リスト
    </h1>
    <input
      v-model="newTaskTitle"
      ref="inputTask"
      v-on:keydown.enter="addTask"
      class="shadow appearance-none border rounded py-2 px-3 text-gray-600 my-4"
      type="text"
      name="task-title"
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
        class="py-2 px-8 border border-gray-400 text-gray-600 mx-auto w-64"
      >
        <button
          @click="displayDetail"
          class="text-blue-400 hover:text-blue-700"
        >
          {{ task.title }}
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
    displayDetail() {
      this.$emit('task-button-click')
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
