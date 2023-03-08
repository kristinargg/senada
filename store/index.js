import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import cors from 'cors'
Vue.use(Vuex)

const global = {
  headers: {
    Authorization: `Bearer c9f531964260906544cd14c31accadcb2b66ec5dc68da9c576674f3990d6acad`,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
}
const config = {
  headers: {
    Authorization: `Bearer c9f531964260906544cd14c31accadcb2b66ec5dc68da9c576674f3990d6acad`,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
  params: {
    limit: 5,
  },
}

export const state = () => ({
  prov_code: '224c2de4-72b5-4e58-9f20-5f869d68ddab', // 224c2de4-72b5-4e58-9f20-5f869d68ddab 5f72ce17-18b4-4742-862e-9dd92e8ade23
  items: [],
  jobfair: [],
  perusahaan: [],
  pelatihans: [],
  error: 404,
  searchResult: [],
  loker: [],
})

export const mutations = {
  setListJobfair(state, payload) {
    state.jobfair = payload
  },
  setPerusahaan(state, payload) {
    state.perusahaan = payload
  },
  setPelatihan(state, payload) {
    state.pelatihans = payload
  },
  setError(state, payload) {
    state.error = payload
  },
  addToWish(state, data) {
    state.items.push(data)
  },
  removeItem(state, data) {
    state.items.splice(data, 1)
  },
  setSearchResult(state, payload) {
    state.searchResult = payload
  },

  //  lowongan kerja
  setListLoker(state, payload) {
    state.loker = payload
  },
}

export const actions = {
  fetchLokers(store) {
    axios
      .get(
        `https://data.kemnaker.go.id/api/v1/services/14d11dbe-11a8-4ba2-8188-38b2bbacb4df?prov_code=${this.state.prov_code}`,
        global
      )
      .then((res) => {
        store.commit('setListLoker', res.data.data)
      })
    // .catch(() => {
    //   // console.error()
    //   store.commit(this.state.setInfoError)
    // })
  },
  fetchHomeLoker(store) {
    axios
      .get(
        `https://data.kemnaker.go.id/api/v1/services/14d11dbe-11a8-4ba2-8188-38b2bbacb4df?prov_code=${this.state.prov_code}`,
        config
      )
      .then((res) => {
        store.commit('setListLoker', res.data.data)
      })
    // .catch(() => {
    //   // console.error()
    //   store.commit(this.state.setInfoError)
    // })
  },
  fetchJobfair(store) {
    axios
      .get(
        `https://data.kemnaker.go.id/api/v1/services/41a44781-00f1-4adf-800c-7f7327e41e2e`,
        global
      )
      .then((res) => {
        // console.log('response', res.data.data)
        store.commit('setListJobfair', res.data.data)
      })
    // .catch(() => {
    //   // console.error()
    //   store.commit("InfoError", this.setInfoError);
    // })
  },
  fetchPerusahaan(store) {
    axios
      .get(
        `https://data.kemnaker.go.id/api/v1/services/eab3bd70-44b0-42ba-baaf-3dc3cdc86cf8?prov_code=${this.state.prov_code}`,
        global
      )
      .then((response) => {
        store.commit('setPerusahaan', response.data.data)
      })
      .catch(() => {
        console.error()
        // store.commit("InfoError", this.setInfoError);
      })
  },
  fetchPelatihan(store) {
    axios
      .get(
        `https://data.kemnaker.go.id/api/v1/services/38fe1841-5b66-4278-9b18-6058c8b1d651?prov_code=${this.state.prov_code}`,
        global
      )
      .then((res) => {
        store.commit('setPelatihan', res.data.data)
      })
      .catch(() => {
        store.commit('setError', this.state.error)
      })
  },
  addToWishlist({ commit }, data) {
    commit('addToWish', data)
  },
  remove(store, data) {
    store.commit('removeItem', data)
  },
}
