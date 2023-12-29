import React, {  useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { Container, Box, Heading, FormControl, Input, Button, Text, Center, Flex, Divider, Image, useToast, InputRightElement, InputGroup, FormErrorMessage } from '@chakra-ui/react';
import { humanRobot, logo } from '../../assets';
import { signUp, Login,googleLogin } from '../api/api';
import {LiaEyeSlash , LiaEyeSolid} from 'react-icons/lia'

const initial = { username: '', email: '', password: '' };

const Authentication = () => {
  const [input, setInput] = useState('')
  const[isLoading , setIsLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState(initial);
  const [show, setShow] = React.useState(false)

  const Toast = useToast()
  const history = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      setIsLoading(true)
      try {
        const { data: { result, token } } = await signUp(form);
        localStorage.setItem('profile', JSON.stringify({ ...result, token }));
        history('/');
        window.location.reload();
      } catch (error) {
        console.error('Error signing up:', error);
      }
    } else {
      setIsLoading(true)
      try {
        const { data: { result, token } } = await Login(form);
        localStorage.setItem('profile', JSON.stringify({ ...result, token }));
        history('/');
        window.location.reload();
      } catch (error) {
        console.error('Error logging in:', error);
      }
    }
  };
  
 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  
  const switchMode = () => {
    setForm(initial);
    setIsSignup((prev) => !prev);
  };

  
  const googleError = () => {
    console.log('Google login error');
  };

  const handleClick = () => setShow(!show)


  return (
    <Box w='100%' minH='100vh'> 
      <Container py={10}  border='2px solid #009e66' >
      <Box  w='100%' p={4} maxW='700px' borderRadius='md'>
          <NavLink to='/'>
          <Image src={logo} mb={5} h='35' mx="auto" /> 
            </NavLink>       
          <Heading mb={5} mt={4} color='#f0f0f0' textAlign="center" fontWeight='500' fontSize='18px'>
                    {isSignup ? 'Create your AIMemesGallery account' : 'Log in to your AIMemesGallery account'}
        </Heading>
        {/* <Button onClick={() => login()}>
            Sign in with Google 🚀{' '}
          </Button>; */}
        {/* <GoogleLogin
          onSuccess={googleSuccess}
          buttonText="Sign In With Google"
          onError={googleError}
          cookiePolicy="single_host_origin"
        /> */}
         <Flex alignItems="center" color="#9f9f9f" mt={5} mb={5}>
            <Divider flex="1" borderColor="gray.500" />
            <Box px={4}>OR</Box>
            <Divider flex="1" borderColor="gray.500" />
          </Flex>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <FormControl fontSize='16px' mb={5}>
              <Input
              required
                type="text"
                size='lg'
                fontSize='16px'
                borderRadius='none'
                name="username"
                placeholder="username"
                value={form.username}
                onChange={handleChange}
                bg="#161616"
                lineHeight= '1.5'
                border="none"
                color="#f1f1f1"
                _focus={{ ring: '#009e66', outline : '1px solid #009e66' }}
                w="full"
                p={3}
              />
            </FormControl>
          )}
          <FormControl mt={2} mb={5}>
            <Input
              required
              size='lg'
              borderRadius='none'
              fontSize='16px'
              bg="#161616"
              lineHeight= '1.5'
              border="none"
              color="#f1f1f1"
              _focus={{ ring: '#009e66', outline : '1px solid #009e66' }}
              w="full"
              p={3}
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              
            />
          </FormControl>
          <InputGroup mt={2} mb={8}>
            <Input
               bg="#161616"
               borderRadius='none'
               lineHeight= '1.5'
               border="none"
               color="#f1f1f1"
               _focus={{ ring: '#009e66', outline : '1px solid #009e66' }}
               w="full"
               p={3}
               required
               type={show ? 'text' : 'password'}              
               size='lg'
               fontSize='16px'
               name="password"
               placeholder="Password"
               value={form.password}
               onChange={handleChange}
               />
               <InputRightElement width='4.5rem'  onClick={handleClick}>
               {show ? (
                 <LiaEyeSolid color='#fff' size='25px' />
                 ):
                 <LiaEyeSlash color='#fff' size='25px'/>
               }
              </InputRightElement>
          </InputGroup>
          
            <NavLink to='/auth/rest-password'  >
              <Text mt={4} mb={5} textAlign="center" fontSize='16px' color='white'>
                  {!isSignup && <><Text as="em" color='#ffff' _hover={{borderBottom:'1px solid #fff'}}>Forgotten Password?</Text></>} 
              </Text>
            </NavLink>


          <Button bg='#009e66' _hover={{bg :'#009e66'}} fontSize='16px' color='white' mb={2} type="submit" width='100%'>
                {isSignup ? (
                  <>
                  {isLoading ? 'Connecting...' : 'Signup'}
                  </>
                ):(
                  <>
                  {isLoading ? 'Logging in ...' : 'Login'}
                  </>
                )}
            </Button>



          <Text mt={2} mb={4} fontSize='16px' color='#f0f0f0' textAlign="center" cursor="pointer" onClick={switchMode}>
              {isSignup ? (
                <> Already have an account? <Text as="em" color='#009e66' _hover={{borderBottom:'1px solid #fff'}}>Login</Text></>
              ) : (
                <> Don't have an account? <Text as="em" color='#009e66'_hover={{borderBottom:'1px solid #fff'}}>Sign up</Text></>)}
          </Text>
        </form>
      </Box>
    </Container>
    </Box>
  );
};

export default Authentication;
