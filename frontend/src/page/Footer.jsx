import { Box, Button, Container, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiFillLinkedin ,AiOutlineTwitter,AiFillGithub,AiOutlineFacebook} from 'react-icons/ai'
const Footer = () => {
  return (
    <Box w='100%' borderTop='1px solid #009e66' h='10vh' bg='#101010' >
       <Container>
        <Flex w='100%' mt={6} justifyContent='space-between' alignItems='center' display={{base : 'flex', md: 'flex', sm: 'block'}}>
            <Flex w='100%'>
                <Text color='#fff' fontSize='15px'>
                © 2023 PicGenius-Ai, Inc.
                </Text>
            </Flex>
            <Spacer />
            <Flex>
                
                
                
            <NavLink >
            <Button
            bg='none'
            _hover={{bg:'none'}}
            >
            <AiOutlineTwitter 
                margin ='0 29px' 
                fontSize='27px'
                bg='transparent'
                color='#fff'
                _hover={{bg :'transparent'}} /> 
            </Button>
            </NavLink>
            <NavLink>
            <Button
            bg='none'
            _hover={{bg:'none'}}
            >
            <AiFillGithub 
                margin ='0 29px' 
                fontSize='27px'
                bg='transparent'
                color='#fff'
                _hover={{bg :'transparent'}} /> 
            </Button>
            </NavLink>
            <NavLink>
            <Button
            bg='none'
            _hover={{bg:'none'}}
            >
            <AiFillLinkedin 
                margin ='0 29px' 
                fontSize='27px'
                bg='transparent'
                color='#fff'
                _hover={{bg :'transparent'}} /> 
            </Button>
            </NavLink>
            <NavLink>
            <Button
            bg='none'
            _hover={{bg:'none'}}
            >
            <AiOutlineFacebook 
                margin ='0 29px' 
                fontSize='27px'
                bg='transparent'
                color='#fff'
                _hover={{bg :'transparent'}} /> 
            </Button>
            </NavLink>
            </Flex>        
        </Flex>
        </Container> 
    </Box>
  )
}

export default Footer