import React from 'react'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import {FaServer} from 'react-icons/fa'


const PaymentForm = () => {


  return (
      <>
      <Box display='flex' alignItems='center' justifyContent='center'>
        <Button  leftIcon={<FaServer />} color='#ffff'
        bg='transparent'
        fontSize='2rem'
        mt='7rem'
       
        _hover={{bg: 'transparent'}}
        >
          Error 404
        </Button>
      </Box>
        <Text color='#fff' textAlign='center' mt='2rem'>
        Apologies for the inconvenience. Payment page under construction. Coming soon!
        </Text>
      </>
  )
}

export default PaymentForm