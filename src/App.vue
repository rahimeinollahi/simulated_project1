<template>
  <div id="nav">
      <navbar />
  </div>
  <router-view/>
</template>

<script>
import Navbar from '../src/components/home/Navbar.vue'
export default {
  components:{Navbar}
}
</script>
<style lang="scss">
</style>
