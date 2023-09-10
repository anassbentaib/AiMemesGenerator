import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import {FaServer} from 'react-icons/fa'
const Help = () => {
  return (
    <Box textAlign='center' justifyContent='center' alignItems='center'>
            <Button fontSize='20px'
            color='#f0f0f0' mt='12rem' mb={5}
            leftIcon={<FaServer />}
            bg='transparent'
            _hover={{bg :'transparent'}}
            >
            ERROR 404
            </Button>
        <Text color='#f9f9f9'>
        We apologize for the inconvenience. Our help page is currently being developed. Thank you for your patience
        </Text>
    </Box>
  )
}

export default Help