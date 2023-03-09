import Vue from 'vue'
import AxiosPlugin from 'vue-axios-cors'

Vue.use(AxiosPlugin)

// export default function ({ $axios }) {
//   $axios.onRequest((config) => {
//     config.headers.common['Access-Control-Allow-Origin'] = '*'
//     config.headers.common['Access-Control-Allow-Methods'] =
//       'GET, POST, PUT, DELETE, OPTIONS'
//     config.headers.common['Access-Control-Allow-Headers'] =
//       'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   })
// }
