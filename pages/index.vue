<template>
  <div class="text-center container mx-auto">
    <h1 class="font-semibold text-4xl text-blue-500">
      ＴＯ ＤＯ リスト
    </h1>

    <input
      v-model="newTaskTitle"
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
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    tasks: [
      { title: '仮タスクタイトル1' },
      { title: '仮タスクタイトル2' },
      { title: '仮タスクタイトル3' },
      { title: '仮タスクタイトル4' }
    ],
    newTaskTitle: ''
  }),
  methods: {
    addTask() {
      this.tasks.push({
        title: this.newTaskTitle
      })
      this.newTaskTitle = ''
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
