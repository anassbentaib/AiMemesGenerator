import { Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Divider, Flex, Grid, GridItem, Heading, List, ListIcon, ListItem, SimpleGrid, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {FaServer} from 'react-icons/fa'
import BillingCards from './BillingCards'
import { Data2 } from '../components/BillingData'
import { CheckIcon } from '@chakra-ui/icons'
const Billing = () => {
  return (
        
    <Box as="section" maxW="6xl" mx="auto">
      <Heading color='#fff' mb={3}>Plans</Heading>
      <SimpleGrid spacing='40px'  templateColumns='repeat(auto-fill, minmax(350px, 1fr))'>
      <BillingCards/>
    </SimpleGrid>


    {Data2.map((item)=>{
      return(
        <Card
        bg='#161616' color='#fff' border='0.5px solid #009e66'  fontSize='15px'
        mt={10}
        mb={5}
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
    >
    <Stack>
        <CardBody>
          <Heading size='md'>{item.title}</Heading>

          <Text py='2'>{item.description}</Text>
        </CardBody>

        <CardFooter>
          <Text fontSize='25px' fontWeight='extrabold'> ${item.price}/mo</Text>
        </CardFooter>
      </Stack>
      <Divider orientation='vertical' />
      <Stack>
      <List mt={3}>
            <ListItem><ListIcon as={CheckIcon} color='green'/>{item.detl1}</ListItem>
        </List>
        <List mt={3}>
            <ListItem><ListIcon as={CheckIcon} color='green'/>{item.detl2}</ListItem>
        </List>
        <List mt={3}>
            <ListItem><ListIcon as={CheckIcon} color='green'/>{item.detl3}</ListItem>
        </List>
        <List mt={3} mb={5}>
            <ListItem><ListIcon as={CheckIcon} color='green'/>{item.detl4}</ListItem>
        </List>
      </Stack>
    </Card>
      )
    })}
  <Text textAlign='center' color='#fff'>
  Secure checkout powered by Stripe
  </Text>

    </Box>
  )
}

export default Billing