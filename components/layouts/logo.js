import Link from 'next/link';
import Image from 'next/image';
import {Text,useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Avatar } from '@chakra-ui/react'
import Profile from '../../public/profile.jpg';

const LogoBox = styled.span`
   font-weight:bold;
   font-size:18px;
   display:inline-flex;
   align-items:center;
   padding:10px;
 
`
const Logo  = () => {
    return (
       <Link href='/'>
           <a>
               <LogoBox>
                    <Avatar name='krish' src={Profile} />
              
               <Text color={useColorModeValue('grey.800','whiteAlpha.900')} fontFamily='M PLUS ROUNDED 1C' fontWeight='bold' ml={3}>
                   krish
               </Text>
               </LogoBox>
           </a>
       </Link>
    )
}
export default Logo