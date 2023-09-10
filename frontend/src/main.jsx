import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const globalStyles = {
  styles: {
    global: {
      body: {
        
        fontFamily: "Poppins, sans-serif",
        padding : '0',
        margin : '0',
      },
    },
  },
};
const theme = extendTheme(globalStyles);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>

    <App />

    </ChakraProvider>

  </React.StrictMode>,
)
