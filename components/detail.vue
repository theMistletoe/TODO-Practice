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
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="displayList"
    >
      戻る
    </button>
  </div>
</template>

<script>
export default {
  props: ['selectedTask'],
  methods: {
    displayList() {
      this.$emit('back-button-click')
    }
  }
}
</script>

<style></style>
