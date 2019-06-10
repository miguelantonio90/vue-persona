<template>
  <div id="dashboard">
    <div id="home">
      Home content will go here--Text de API conection
      <div class="control">
        <button type="button" class="btn btn-sm btn-primary" v-on:click="testConected"><i class="fa fa-wifi"></i>
          Test API
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Dashboard',
    methods: {
      testConected: function () {
        console.log('sending test call to api ...')
        axios.get('/ping').then((response) => {
          alert(response.data)
        }, (err) => {
          alert(err)
        })
      }
    }
  }
</script>

<style lang="css">
</style>
