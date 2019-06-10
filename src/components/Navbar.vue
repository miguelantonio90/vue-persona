<template>
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
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped>

</style>
