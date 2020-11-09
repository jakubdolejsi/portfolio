
import axios from 'axios'

export const REGISTRATION = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    axios.get('login', payload)
      .then(({ data }) => {
        resolve(true)
      })
      .catch((err) => {
        console.log('registration error:', err)
        reject(err)
      })
  })
}
