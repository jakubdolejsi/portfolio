import axios from 'axios'

export default async ({ Vue }) => {
  axios.defaults.baseURL = 'http:/localhost:3001/api/'
  Vue.prototype.$axios = axios

  const authToken = localStorage.getItem('authToken')
  if (authToken) {
    Vue.prototype.$axios.defaults.headers.common.Authorization = authToken
  }
}
