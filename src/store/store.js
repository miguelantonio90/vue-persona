import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    personas: [],
    persona: {
      _id: '',
      firstName: '',
      lastName: '',
      gender: '',
      born: '',
      age: '',
      noIdent: '',
      children: '',
      position: '',
      salary: '',
      race: ''
    }
  },
  actions: {
    listingPerson: function ({commit}) {
      axios.get('/persona').then((response) => {
        commit('LISTING_PERSON', {persona: response.data})
      }, (err) => {
        console.log(err)
      })
    },
    getPersonById: function ({commit, state}, {id}) {
      axios.get('/persona/find/' + id).then((response) => {
        commit('GET_PERSON_BY_ID', {persona: response.data})
      }, (err) => {
        console.log(err)
      })
    },
    addPerson: function ({commit, state}, {persona}) {
      axios.post('/persona/add', persona).then((response) => {
        if (response.status === 200) {
          commit('ADD_PERSON', {persona: persona})
        }
      }, (err) => {
        console.log(err)
      })
    },
    updatePerson: function ({commit, state}, {persona}) {
      axios.put('/persona/edit/' + persona._id, persona).then((response) => {
        if (response.status === 200) {
          commit('UPDATE_PERSON', {persona: response.data.persona})
        }
      }, (err) => {
        console.log(err)
      })
    },
    deletePerson: function ({commit, state}, {persona}) {
      axios.delete('/persona/delete/' + persona._id, persona).then((response) => {
        if (response.status === 200) {
          commit('DELETE_PERSON', {persona: response.data})
        }
      }, (err) => {
        console.log(err)
      })
    }
  },
  mutations: {
    LISTING_PERSON: (state, {persona}) => {
      state.personas = persona
    },
    GET_PERSON_BY_ID: (state, {persona}) => {
      state.persona = persona
    },
    ADD_PERSON: (state, {persona}) => {
      state.personas.push(persona)
    },
    UPDATE_PERSON: (state, {persona}) => {
      let idx = state.personas.map(p => p.id).indexOf(persona._id)
      state.personas.splice(idx, 1, persona)
    },
    DELETE_PERSON: (state, {persona}) => {
      let idx = state.personas.map(p => p._id).indexOf(persona._id)
      state.personas.splice(idx, 1)
    }
  },
  getters: {
    openPerson: state => {
      return state.personas.filter(persona => !persona.completed)
    },
    personCount: state => {
      return state.personas.length
    }
  }
})

export default store
