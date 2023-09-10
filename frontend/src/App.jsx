import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, CreatePost , ForgetPassword , Authentication,Navbar, Help, Billing, ErrorPage, Footer, PaymentForm } from './page';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Box, Button, useColorMode } from '@chakra-ui/react';


const clientId = import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID

const App = () => (
  <GoogleOAuthProvider clientId={clientId}>

    <BrowserRouter>
      <Navbar />
      <Box as="main" sm="p-8" px="4" py="8" w="full" bg="#101010" minH="calc(100vh - 73px)">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/auth/rest-password" element={<ForgetPassword />} />
          <Route path="/help" element={<Help />} />
          <Route path="/upgrade" element={<Billing />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path = '/payment-method' element={<PaymentForm />} />

        </Routes>
      </Box>
    </BrowserRouter>
  </GoogleOAuthProvider>
);

export default App;
