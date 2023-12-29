// frontend/src/api/api.js

import axios from 'axios';


const BASE_URL = 'https://aigeneraaator.onrender.com'; 


export const Login = (form) => axios.post(`${BASE_URL}/auth/login`, form);
 

export const signUp = (form) => axios.post(`${BASE_URL}/auth/signup`, form);
 

export const googleLogin = ({ name, email, token } ) => axios.post(`${BASE_URL}/auth/google-login`,{ name, email, token });
  
