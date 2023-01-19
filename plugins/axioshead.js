export default function ({ $axios, store }) {
  $axios.onRequest((config) => {
    if (store.state.index.token) {
      //   axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
      // Headers:{
      //         Authorization : `Bearer ${this.state.index.token}`
      //     }
    }
  })
}
