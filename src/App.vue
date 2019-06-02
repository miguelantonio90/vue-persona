<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-dark">
      <ul class="navbar-nav">
        <li class="nav-item ">
          <router-link :to="{ name: 'Home' }" class="nav-link text-white"><i class="fa fa-home"></i> Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Index' }" class="nav-link text-white"><i class="fa fa-user"></i> Person
          </router-link>
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App'
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
