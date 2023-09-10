import React from 'react'
import {  Button, Card, CardBody, CardFooter, Divider, Flex, Heading, List, ListIcon, ListItem, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import {BillingData} from '../components/BillingData'
import { BsFillLightningFill } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
const BillingCards = () => {
  return (
   <>
   {BillingData.map((item, i)=>{
    return(
    <Card bg='#161616' color='#fff' border='0.5px solid #009e66'  fontSize='15px'>
      <CardBody>
        <Text  size='md' mb={3}>{item.title}</Text>
        <Text mb={5}fontSize='14px' >{item.description}</Text>
        <Text as='span' color='#9f9f9f' fontWeight='bold'>Starting at</Text>
        <Heading fontSize='25px' fontWeight='extrabold' mb={5}>${item.price}/mo</Heading>
        <NavLink to='/payment-method'>
          <Button w='100%' mb={5}
          leftIcon={<BsFillLightningFill/>}>
            Subscribe
          </Button>
        </NavLink>
      <Divider />
        <List mt={5}>
            <ListItem><ListIcon as={CheckIcon} color='green'/>{item.detl1}</ListItem>
        </List>
        <List mt={5}>
            <ListItem><ListIcon as={CheckIcon} color='green'/>{item.detl2}</ListItem>
        </List>
        <List mt={5}>
            <ListItem><ListIcon as={CheckIcon} color='green'/>{item.detl3}</ListItem>
        </List>
        <List mt={5}>
            <ListItem><ListIcon as={CheckIcon} color='green'/>{item.detl4}</ListItem>
        </List>
      </CardBody>
      <CardFooter>
        
      </CardFooter>
    </Card>
    )
   })}
   </>
    
  )
}

export default BillingCards