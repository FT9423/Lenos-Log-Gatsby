import axios from "axios"

const API_URL = "http://198.58.124.50:8080/LenoLog/"

// defualt headers config
const defaultOptions = {
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
}

// create a new axios instance
const instance = axios.create(defaultOptions)

// set request
instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
