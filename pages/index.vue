<template>
  <section class="container">
    <div>
      <component :is="currentView"></component>
    </div>
  </section>
</template>

<script>
import list from '~/components/list.vue'
import detail from '~/components/detail.vue'

export default {
  components: {
    list,
    detail
  },
  data() {
    return {
      currentView: 'list'
    }
  },
  methods: {
    view1() {
      this.currentView = 'list'
    },
    view2() {
      this.currentView = 'detail'
    }
  }
}
</script>
