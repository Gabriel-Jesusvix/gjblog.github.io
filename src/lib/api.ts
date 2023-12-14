import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api.github.com/users'
})

export const issuesApi = axios.create({
  baseURL: 'https://api.github.com/search/'
})
// https://api.github.com/users/gabriel-jesusvix