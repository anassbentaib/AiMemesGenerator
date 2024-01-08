import axios from "axios";
const BASE_URL = "http://localhost:8080";

export const Login = (form) => axios.post(`${BASE_URL}/auth/login`, form);

export const signUp = (form) => axios.post(`${BASE_URL}/auth/signup`, form);

export const gererateImage = (form) =>
  axios.post(`${BASE_URL}/generate-image`, form);

export const createPost = (form) => axios.post(`${BASE_URL}/create-post`, form);
