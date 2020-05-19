<template>
  <section class="container mx-auto">
    <List v-if="currentView === 'list'" @task-button-click="displayDetail" />
    <Detail v-if="currentView === 'detail'" @back-button-click="displayList" />
  </section>
</template>

<script>
import List from '~/components/list.vue'
import Detail from '~/components/detail.vue'

export default {
  components: {
    List,
    Detail
  },
  data() {
    return {
      currentView: 'list'
    }
  },
  methods: {
    displayList() {
      this.currentView = 'list'
    },
    displayDetail() {
      this.currentView = 'detail'
    }
  }
}
</script>
