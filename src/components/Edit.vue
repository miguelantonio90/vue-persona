<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>Editar Persona</h4>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updatePersona">
          <div class="form-body">
            <h5 class="card-title">Person Info</h5>
            <hr>
            <div class="row p-t-20">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label">Nombres</label>
                  <input type="text" class="form-control" v-model="persona.firstName">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label">Apellidos</label>
                  <input type="text" class="form-control" v-model="persona.lastName">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group has-success">
                  <label class="control-label">Sexo</label>
                  <select class="form-control" v-model="persona.gender">
                    <option value="0">Masculino</option>
                    <option value="1">Femenino</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label class="control-label">Fecha de nacimiento</label>
                  <input
                    type="date"
                    class="form-control"
                    placeholder="dd/mm/yyyy"
                    v-model="persona.born"
                  >
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label class="control-label">Edad</label>
                  <input type="text" class="form-control" v-model="persona.age">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label">No. Identidad</label>
                  <input type="text" class="form-control" v-model="persona.noIdent">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label">Hijos</label>
                  <input type="number" class="form-control" v-model="persona.children">
                </div>
              </div>
            </div>
            <h5 class="box-title m-t-40">Extras</h5>
            <hr>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label>Cargo</label>
                  <input type="text" class="form-control" v-model="persona.position">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Salario</label>
                  <input type="text" class="form-control" v-model="persona.salary">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Raza</label>
                  <input type="text" class="form-control" v-model="persona.race">
                </div>
              </div>
            </div>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Update</button>
            <button type="button" class="btn btn-danger" @click="$router.push({ name: 'Index' })">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  data () {
    return {
      persona: {}
    }
  },
  created: function () {
    this.getPersona()
  },
  methods: {
    getPersona () {
      let uri = 'http://localhost:4000/personas/find/' + this.$route.params.id
      this.axios.get(uri).then(response => {
        this.persona = response.data
      })
    },
    updatePersona () {
      let uri = 'http://localhost:4000/personas/edit/' + this.$route.params.id
      this.axios.post(uri, this.persona).then(response => {
        console.log(response)
        this.$router.push({ name: 'Index' })
      })
    }
  }
}
</script>

<style scoped>
</style>
