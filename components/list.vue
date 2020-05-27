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

    <draggable tag="ul" @end="draggableEnd">
      <li
        v-for="task in tasks"
        :key="task.id"
        class="py-2 px-8 border border-gray-400 text-gray-600 mx-auto w-1/2 text-left flex"
      >
        <input
          ref="inputTitle"
          v-model="task.title"
          type="text"
          class="inline-block flex-auto px-2 py-2 block focus:shadow appearance-none focus:border focus:rounded text-gray-600 w-1/2 mx-auto"
          @keydown.enter="focusOut(task)"
        />
        <nuxt-link
          :to="{
            path: '/detail/',
            query: { id: task.id }
          }"
        >
          <button
            class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            詳細
          </button>
        </nuxt-link>

        <button
          class="inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-2 rounded"
          @click="deleteListTask(task)"
        >
          削除
        </button>
      </li>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import taskStorage from '~/store/index'

function getUniqueStr() {
  return (
    new Date().getTime().toString(16) +
    Math.floor(1000 * Math.random()).toString(16)
  )
}

function moveAt(tasks, oldIndex, newIndex) {
  if (
    oldIndex === newIndex ||
    oldIndex > tasks.length - 1 ||
    newIndex > tasks.length - 1
  ) {
    return tasks
  }
  const value = tasks[oldIndex]
  const tail = tasks.slice(oldIndex + 1)
  tasks.splice(oldIndex)
  Array.prototype.push.apply(tasks, tail)
  tasks.splice(newIndex, 0, value)
  return tasks
}

export default {
  components: { draggable },
  data: () => ({
    tasks: [],
    newTaskTitle: ''
  }),
  watch: {
    tasks: {
      handler() {
        taskStorage.save(this.tasks)
      },
      deep: true
    }
  },
  created() {
    this.tasks = taskStorage.fetch()
  },
  methods: {
    addTask(clickevent) {
      const id = getUniqueStr()
      if (this.newTaskTitle !== '') {
        this.tasks.push({
          title: this.newTaskTitle,
          id: id
        })
      }
      this.newTaskTitle = ''
      this.$refs.inputTask.focus()
    },
    focusOut(task) {
      const index = this.tasks.indexOf(task)
      this.$refs.inputTitle[index].blur()
    },
    deleteListTask(task) {
      const index = this.tasks.indexOf(task)
      this.tasks.splice(index, 1)
    },
    draggableEnd(event) {
      moveAt(this.tasks, event.oldIndex, event.newIndex)
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
