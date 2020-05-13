<template>
  <div>
    <h1 class="title">
      TO DO リスト
    </h1>
    <ul>
      <li v-for="task in tasks">{{ task.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    tasks: [
      { title: '仮タスクタイトル1' },
      { title: '仮タスクタイトル2' },
      { title: '仮タスクタイトル3' },
      { title: '仮タスクタイトル4' }
    ]
  })
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
