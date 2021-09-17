import axios from 'axios'

const instance = axios.create({
  // 先設好baseURL
  baseURL: 'https://tinder-clone-wishsucess.herokuapp.com',
})

export default instance