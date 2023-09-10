// frontend/src/api/api.js

import axios from 'axios';


const url = 'http://localhost:8080/auth'; 


export const Login = (form) => axios.post(`${url}/login`, form);
 

export const signUp = (form) => axios.post(`${url}/signup`, form);
 

export const googleLogin = ({ name, email, token } ) => axios.post(`${url}/google-login`,{ name, email, token });
  
