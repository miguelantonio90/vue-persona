<template>
  <div>
    <h1>Listado de Personas</h1>

    <table class="table table-hover">
      <thead>
        <tr>
          <td>Nombres</td>
          <td>Apellidos</td>
          <td>Edad</td>
          <td>Sexo</td>
          <td>Fecha de nacimiento</td>
          <td>No. Identidad</td>
          <td>Hijos</td>
          <td>Cargo</td>
          <td>Salario</td>
          <td>Raza</td>
          <td>Actions</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="persona in personas" :key="persona._id">
          <td>{{ persona.firstName }}</td>
          <td>{{ persona.lastName }}</td>
          <td>{{ persona.age }}</td>
          <td v-if="persona.gender">Femenino</td><td v-else>Masculino</td>
          <td>{{ persona.born }}</td>
          <td>{{ persona.noIdent }}</td>
          <td>{{ persona.children }}</td>
          <td>{{ persona.position }}</td>
          <td>{{ persona.salary }}</td>
          <td>{{ persona.race }}</td>
          <td>
            <router-link :to="{name: 'Edit', params: { id: persona._id }}" class="btn btn-primary">Edit</router-link>
          </td>
          <td>
            <button class="btn btn-danger" v-on:click="deletePersona(persona._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Personas',
  data () {
    return {
      personas: []
    }
  },

  created: function () {
    this.fetchPersonas()
  },

  methods: {
    fetchPersonas () {
      let uri = 'http://localhost:4000/personas'
      this.axios.get(uri).then(response => {
        this.personas = response.data
      })
    },
    deletePersona (id) {
      let uri = 'http://localhost:4000/personas/delete/' + id
      this.personas.splice(id, 1)
      this.axios.get(uri)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
