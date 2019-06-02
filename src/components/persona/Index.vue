<template>
  <div>
    <div class="columns">
      <router-link :to="{name: 'Create'}" class="btn btn-sm btn-primary"><i class="fa fa-plus"></i> Adding
      </router-link>
      <persona-list/>
    </div>
  </div>
</template>

<script>
  import personaList from './PersonaList'

  export default {
    name: 'Personas',
    components: {
      personaList
    },
    mounted: function () {
      this.$store.dispatch('listingPerson')
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
