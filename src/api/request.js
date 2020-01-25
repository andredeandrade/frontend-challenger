import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1'
})

export default instance
