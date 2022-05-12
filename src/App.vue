<template>
  <div id="nav">
      <navbar />
  </div>
 <router-view v-slot="{ Component, route }">
  <!-- Use any custom transition and fallback to `fade` -->
  <transition :name="route.meta.transition || 'fade'">
    <component :is="Component" />
  </transition>
</router-view>
</template>

<script>
import Navbar from '../src/components/home/Navbar.vue'
export default {
  components:{Navbar}
}
</script>
<style lang="scss">
</style>
