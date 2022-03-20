import NextLink from 'next/link';
import { Container,Box,Heading,Link,Badge} from '@chakra-ui/react';
import {ChevronRightIcon} from "@chakra-ui/icons";
import Image from 'next/image'

export const Title = ({children}) =>  (
    <Box>
        <NextLink href='/works'>
            <Link>Works</Link>
        </NextLink>
        <span>
            <ChevronRightIcon/>
        </span>
        <Heading fontSize={20} mb={2} as='h3' display='inline-block'>{children}</Heading>
    </Box>
)
export const WorkImage = ({src,alt}) => (
    <Image borderRadius={50}   maxWidth='100px' src={src} mb={4}/> 
)
export const Meta = ({children}) => (
    <Badge  colorScheme='green' mr={2}>{children}</Badge>
)