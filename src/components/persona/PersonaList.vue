<template>
  <div>
    <h3>People's List</h3>
    <table class="table table-hover table-responsive">
      <thead>
      <tr>
        <td>Names</td>
        <td>Last Names</td>
        <td>Age</td>
        <td>Gender</td>
        <td>Birth date</td>
        <td>No. Identity</td>
        <td>Childer</td>
        <td>Position</td>
        <td>Salary</td>
        <td>Race</td>
        <td>Actions</td>
      </tr>
      </thead>

      <tbody>
      <tr v-for="persona in personas" :key="persona._id">
        <td>{{ persona.firstName }}</td>
        <td>{{ persona.lastName }}</td>
        <td>{{ persona.age }}</td>
        <td v-if="persona.gender">Female</td>
        <td v-else>Male</td>
        <td>{{ persona.born }}</td>
        <td>{{ persona.noIdent }}</td>
        <td>{{ persona.children }}</td>
        <td>{{ persona.position }}</td>
        <td>{{ persona.salary }}</td>
        <td>{{ persona.race }}</td>
        <td>
          <router-link :to="{name: 'Edit', params: { id: persona._id }}"
                       class="btn btn-sm btn-info"><i class="fa fa-pencil"></i></router-link>
          <button class="btn btn-sm btn-danger" v-on:click="deletePersona(persona)"><i class="fa fa-trash"></i>
          </button>
        </td>

      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'PersonaList',
    computed: mapState(['personas']),
    methods: {
      deletePersona(persona) {
        this.$store.dispatch('deletePerson', {persona: persona})
      }
    }
  }
</script>

<style scoped>
</style>
