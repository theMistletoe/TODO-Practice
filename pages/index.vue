<template>
  <div>
    <h1 class="title">
      TO DO リスト
    </h1>
    {{ task.title }}
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    task: {
      title: '仮タスクタイトル'
    }
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
