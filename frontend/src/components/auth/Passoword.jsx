import React, { useState, useEffect } from 'react'
import * as Components from './Components';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import secureLocalStorage from "react-secure-storage"
import { Link } from 'react-router-dom';
import Loader from './Loader';
import BaseURL from './BaseURL';


const Signin = () => {
    

    /********** */
      //hadi bach katchof wach deja user 3aml login wla lae bach may9drch ydkhol n dashboard b link
        const[auth , setAuth]= useState('');
        const history1 = useNavigate();
        useEffect(()=>{
            var auth = secureLocalStorage.getItem('au')
            //console.log(auth)
            setAuth(auth)


            //hadi bach nchof parameter f link wach signup wla signin
            const urlParams = new URLSearchParams(window.location.search);
            const signUpParam = urlParams.get('signup');
        
            if (signUpParam === 'true') {
              toggle(false);
            }
        },[])
        if (auth){
            history1(`/dashboard`)
        }


    /*********** */

    const [signIn, toggle] = React.useState(true);
  /*********************sign up part */
      const [inputs, setInputs] = useState({});
      //had error kanstocker fiha error messages dyal ida kan email deja kayn f DB wla err dyal cnx
      const [error, setError] = useState("");
      //had errors kanstocker fiha error msg li ghayban ida b9at chi input khawya
      const [errors, setErrors] = useState('');

      const [isLoading, setIsLoading] = useState(false); // Add isLoading state


      const handleChange = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          setInputs(values => ({...values, [name]: value}));

            // Check if the input field is empty
        if(value === ""){
            setErrors(prevErrors => ({...prevErrors, [name]: "This field is required"}))
        } else {
            setErrors(prevErrors => ({...prevErrors, [name]: ""}))
        }
    
        // Check if the input field has a certain pattern
        if(name === "email" && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            setErrors(prevErrors => ({...prevErrors, [name]: "Invalid email address"}))
        }

        // Check if the password input field hasn't a certain pattern
        //if(name === "password" && !value.match(/^(?=.[a-z])(?=.[A-Z])(?=.[!@#.$+%^&])[a-zA-Z!@#+.$%^&*]{8,}$/)){
            //  setErrors(prevErrors => ({...prevErrors, [name]: "at least 8 letters"}))
        //}


      } 

const handleSubmit = async (event) => {
    event.preventDefault();
    // check if there are any errors bach ida kano matdozch submit
    const hasErrors = Object.values(errors).some(error => error !== "");
    if (hasErrors) {
        console.log("Please fix the errors before submitting the form.");
        return;
    }
    setIsLoading(true); // Show loader when submitting
    // send the hashed password to the server
    try {
        const response = await axios.post(`${BaseURL}/api/index.php`, inputs);
        if (response.data.status === 0) {
            setError(response.data.message);
        } else {
            setError("");
            setErrors("")
            console.log("Record created successfully.");
            //store the data in crypted mode in local storage
            secureLocalStorage.setItem('n', response.data.name);
            secureLocalStorage.setItem('e', response.data.email);
            secureLocalStorage.setItem('i', response.data.id);
            secureLocalStorage.setItem('p', response.data.phone);//ida makhdmatch msha
            secureLocalStorage.setItem('au', "True");
            history("/dashboard");
        }
    } catch (error) {
        console.log(error);
        setError("Something went wrong, please try again later.")
    }
    setIsLoading(false); // Hide loader after response
};


             <Components.SignUpContainer className='SignUpContainer' signinIn={signIn}>
                 <Components.Form className='sign-Form signup-Form' onSubmit={handleSubmit}>
                     <Components.Title className='sign-Title'>Create Account</Components.Title>
                     <Components.Input className='sign-Input' type='text' name="name" placeholder='Name' onChange={handleChange} required/>
                     {errors.name && <span className="err">{errors.name}</span>}
                     <Components.Input className='sign-Input' type='email' name="email" placeholder='Email' onChange={handleChange} required/>
                     {errors.email && <span className="err">{errors.email}</span>}
                     <Components.Input className='sign-Input' type='password' name="password" placeholder='Password' onChange={handleChange} required/>
                     {error && <p className='err'>{error}</p>}
                     {errors.password && <span className="err">{errors.password}</span>}
                     <Components.Button className='sign-Button'>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer className='SignInContainer' signinIn={signIn}>
                  <Components.Form className='sign-Form signin-Form' onSubmit={handleSubmit1}>
                      <Components.Title className='sign-Title'>Sign in</Components.Title>
                      <Components.Input className='sign-Input' type='email' placeholder='Email' name="email1" onChange={handleChangee} required/>
                      {errorss.email1 && <span className="err">{errorss.email1}</span>}
                      <Components.Input className='sign-Input' type='password' placeholder='Password' name="password1" onChange={handleChangee}required/>
                      {errorss.password1 && <span className="err">{errorss.password1}</span>}
                      <Link to='/reset-password' className='sign-frgt-link'>Forgot your password?</Link>
                      <Components.Button className='sign-Button'>Sigin In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer className='OverlayContainer' signinIn={signIn}>
                 <Components.Overlay className='sign-Overlay' signinIn={signIn}>

                 <Components.LeftOverlayPanel className='LeftOverlayPanel' signinIn={signIn}>
                     <Components.Title className='sign-Title'>Welcome Back!</Components.Title>
                     <Components.Paragraph className='sign-Paragraph'>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton className='sign-GhostButton' onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel className='RightOverlayPanel' signinIn={signIn}>
                        <Components.Title className='sign-Title'>Hello, Friend!</Components.Title>
                        <Components.Paragraph className='sign-Paragraph'>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                            <Components.GhostButton className='sign-GhostButton' onClick={() => toggle(false)}>
                                Sigin Up
                            </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
  )
}

export default Signin