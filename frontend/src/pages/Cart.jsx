import React from "react";
import {Box,Flex,Image,Text,Divider,Button,Radio} from '@chakra-ui/react';

import { BiRupee } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiCardPickup } from "react-icons/gi";
import { MdRecycling } from "react-icons/md";

let pro = [{
    name:"Battery Operated Three Wheel Ride-on Bike -  Green BlueBattery Operated Three Wheel Ride-on Bike - Green Blue",
    price:6196.90,
    quantity:2,
    img:"https://cdn.fcglcdn.com/brainbees/images/products/thumb/10307320a.webp",
    discount:35
},
{
    name:"Battery Operated Three Wheel Ride-on Bike -  Green BlueBattery Operated Three Wheel Ride-on Bike - Green Blue",
    price:6196.90,
    quantity:2,
    img:"https://cdn.fcglcdn.com/brainbees/images/products/thumb/10307320a.webp",
    discount:35
}
]



export const Cart = () => {


// let date = new Date()
// console.log(date)


const handelDelete = (e) => {
    console.log(e)
}

    return(
       <Box bg='#f8f8f8' >

         <Flex w='90%' m='auto'  pt='20px'justifyContent='space-around'>
         <Box w='60%'  p='10px' bg='blue' boxShadow='xs' rounded='md' >
            {pro && pro.map((ele,i)=>(
            <Box key={i} mb='20px'>
                <Flex gap='20px' p='10px'  borderBottom='1px solid gray' borderTop='1px solid gray'>

                    <Box w='18%' p='10px'>
                     <Image m='auto' w='100%' src={ele.img} alt={ele.name} />
                    </Box>

                    <Box w='60%'>
                     <Text as='b'>{ele.name}</Text>
                     <Flex alignItems='center' gap='5px'><CiDeliveryTruck/> <Text>Get it by</Text>   <Text>{'Wednesday, Mar 01'}</Text></Flex>
                     <Text>Dispatch Within: 24 Hours</Text>
                    
                    </Box>
                     
                    <Box borderLeft='1px solid gray' pl='10px' w='22%'>
                       <Flex as='b' fontSize='20px' alignItems='center'><BiRupee/><Text>{ele.price}</Text></Flex>
                       <Flex gap='5px' alignItems='center' fontSize='15px'>
                        <Text>MRP</Text> 
                        <Flex alignItems='center'><BiRupee/><Text as='del'>{Math.floor(ele.price+((ele.price*ele.discount)/100))}</Text></Flex>
                        <Text color='red'>{ele.discount} % OFF </Text>
                       </Flex>
                       <Text fontSize='15px'>MRP Includes all taxes</Text>

                       <Flex gap='3px'>
                        <Button size='sm'>+</Button>
                        <Button size='sm'>Qty : {ele.quantity}</Button>
                        <Button size='sm'>-</Button>
                       </Flex>
                       
                    </Box>

                </Flex>

            <Flex gap='5px'>
            <Button onClick={()=>handelDelete(ele)} leftIcon={<RiDeleteBin6Line/>} bg='transparent' variant='solid'>REMOVE</Button>
            <Button leftIcon={<FiHeart/>} bg='transparent' variant='solid'>MOVE TO SHORTLIST</Button>
            </Flex>

            </Box>
           
            ))}

            <Box>
                
                <Flex gap='20px'>
                   <Button size='md' w='50%' colorScheme='orange'>
                    {localStorage.getItem('token') ? "ADD TO CART" : "LOGIN TO PLACE ORDER"}
                   </Button>

                    <Button size='md' w='30%' bg='gray' alignItems='center' >
                      <Flex justifyContent='space-between' gap='25px'>
                       <Box >
                         <Text fontSize='10px'>Total</Text>
                         <Text>'TOTAL</Text>
                       </Box>
                       <Text>PLACE ORDER</Text>
                      </Flex>
                    </Button>

                </Flex>
            </Box>

            

          </Box>

           <Box w='30%' bg='red'  p='15px'>
            <Box>
            <Flex gap='10px' alignItems='center' bg='pink'>
              <Image h='100px' src='https://cdn.fcglcdn.com/brainbees/checkout/gift-wrap.png' alt='gift' />
              <Box w='70%'>
                <Text as='b'>Buying For Loved one?</Text>
                <Text fontSize='12px'>Gift Wrap and personalised Message on Card.</Text>
              </Box>
              <Radio isInvalid></Radio>
              </Flex>
            </Box>
             <Text as='b' fontSize='lg'>Payment Information</Text>
             <Flex mt='8px' gap='30px' justifyContent='space-between'>
                <Text>Value of Product(s)</Text>
                <Flex alignItems='center'><BiRupee/>{''}<Text>{3892.00}</Text></Flex>
             </Flex>
             <Flex gap='30px' justifyContent='space-between'>
                <Text>Discount(-)</Text>
                <Flex alignItems='center'><BiRupee/>{''}<Text>{3892.00}</Text></Flex>
             </Flex>
             <Flex gap='30px' justifyContent='space-between'>
                <Text>Estimated GST(+)</Text>
                <Flex alignItems='center'><BiRupee/>{''}<Text>{3892.00}</Text></Flex>
             </Flex>
             <Flex mb='8px' gap='30px' justifyContent='space-between'>
                <Text>Shipping(+)</Text>
                <Flex alignItems='center'><BiRupee/>{''}<Text>{3892.00}</Text></Flex>
             </Flex>
             <Divider/>
             <Flex mt='5px' mb='5px' gap='30px' as='b' justifyContent='space-between'>
                <Text >Sub Total</Text>
                <Flex alignItems='center'><BiRupee/>{''}<Text>{3892.00}</Text></Flex>
             </Flex>
             <Divider/>
             <Flex mt='5px' mb='5px' gap='30px'as='b' justifyContent='space-between'>
                <Text >Final Payment</Text>
                <Flex alignItems='center'><BiRupee/>{''}<Text>{3892.00}</Text></Flex>
             </Flex>
           </Box>
         </Flex>

         <Flex justifyContent='space-between' w='85%' m='auto' mt='30px'>
            <Flex justifyContent='space-around'p='5px' w='63%' alignItems='center' gap='10px' fontSize='12px' bg='white' boxShadow='xs' rounded='md'>
                <Text as='b' fontSize='15px'>SHOP WITH CONFIDENCE</Text>
                <Flex alignItems='center' ><AiFillSafetyCertificate size='50px' color="#bbd139"/><Text>Hassle Free Returns</Text></Flex>
                <Flex alignItems='center' ><GiCardPickup size='50px' color="#bbd139"/><Text>Hand Picked Products</Text></Flex>
                <Flex alignItems='center' ><MdRecycling size='50px' color="#bbd139"/><Text>Shop safe & secure</Text></Flex>
            </Flex>
            <Box w='30%' bg='red'></Box>
            </Flex>

       </Box>
    )
}