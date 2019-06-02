<template>
  <div id="app" class="container">
    <navbar/>
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";

  export default {
    name: 'App',
    components: {Navbar}
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  .gap {
    margin-top: 50px;
  }
</style>
