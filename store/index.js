import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import cors from 'cors'

Vue.use(Vuex)

const config = {
  headers: {
    Authorization: `Bearer c9f531964260906544cd14c31accadcb2b66ec5dc68da9c576674f3990d6acad`,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
}
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
export const state = () => ({
  token: 'c9f531964260906544cd14c31accadcb2b66ec5dc68da9c576674f3990d6acad',
  prov_code: '224c2de4-72b5-4e58-9f20-5f869d68ddab', // 224c2de4-72b5-4e58-9f20-5f869d68ddab 5f72ce17-18b4-4742-862e-9dd92e8ade23
  loker: [],
  jobfair: [],
  perusahaan: [],
  paginations: [],
  pelatihans: [],
  error: 404,
  page: 1,
})

export const mutations = {
  setListLoker(state, payload) {
    state.loker = payload
  },
  setListJobfair(state, payload) {
    state.jobfair = payload
  },
  setPaginationLoker(state, payload) {
    state.paginations = payload
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
}

export const actions = {
  fetchLoker(store) {
    axios
      .get(
        `https://data.kemnaker.go.id/api/v1/services/14d11dbe-11a8-4ba2-8188-38b2bbacb4df?prov_code=${this.state.prov_code}&limit=5&offset=0`,
        config
      )
      .then((res) => {
        console.log('response', res.data)
        store.commit('setListLoker', res.data)
      })
    // .catch(() => {
    //   // console.error()
    //   store.commit(this.state.setInfoError)
    // })
  },
  fetchMoreLoker(store) {
    axios
      .get(
        `https://data.kemnaker.go.id/api/v1/services/14d11dbe-11a8-4ba2-8188-38b2bbacb4df?prov_code=${this.state.prov_code}&limit=5&offset=0`,
        config
      )
      .then((res) => {
        store.commit('setListLoker', [...store.state.loker, ...res.data.data])
      })
    // .catch(() => {
    //   // console.error()
    //   store.commit(this.state.setInfoError)
    // })
  },
  fetchLokerPagination(store) {
    axios
      .get(
        `https://data.kemnaker.go.id/api/v1/services/14d11dbe-11a8-4ba2-8188-38b2bbacb4df?prov_code=${this.state.prov_code}&limit=5&offset=20`,
        config
      )
      .then((res) => {
        // console.log('response', res.data.links)
        store.commit('setPaginationLoker', [...store.state.loker, ...res.data])
      })
  },
  fetchJobfair(store) {
    axios
      .get(
        `https://data.kemnaker.go.id/api/v1/services/41a44781-00f1-4adf-800c-7f7327e41e2e`,
        config
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
        {
          config,
          params: {
            limit: 5,
          },
        }
      )
      .then((response) => {
        console.log('response', response.data)
        store.commit('setPerusahaan', response.data.data)
      })
      .catch(() => {
        console.error()
        // store.commit("InfoError", this.setInfoError);
      })
  },
  fetchMore(store) {
    axios
      .get(
        `https://data.kemnaker.go.id/api/v1/services/14d11dbe-11a8-4ba2-8188-38b2bbacb4df?prov_code=${this.state.prov_code}&limit=5&offet=0`,
        config
      )
      .then((response) => {
        store.commit('setPerusahaan', [
          ...store.state.perusahaan,
          ...response.data.data,
        ])
      })
    // .catch(() => {
    //   // console.error()
    //   store.commit(this.state.setInfoError)
    // })
  },
  fetchPelatihan(store) {
    axios
      .get(
        `https://data.kemnaker.go.id/api/v1/services/38fe1841-5b66-4278-9b18-6058c8b1d651?prov_code=${this.state.prov_code}`,
        config
      )
      .then((res) => {
        console.log('res', res.data.data)
        store.commit('setPelatihan', res.data.data)
      })
      .catch(() => {
        store.commit('setError', this.state.error)
      })
  },
}
