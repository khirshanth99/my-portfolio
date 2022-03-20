import { Divider } from "@chakra-ui/react";
import {Box,Container, Heading,Button,Text} from "@chakra-ui/react";
import NextLink from 'next/link';

const NotFound = () => (
    <Container>
        <Heading as='h2'>Not Found</Heading>
        <Text>The page you&apos;re looking for was not found</Text>
        <Divider  my={6}/>
        <Box my={6}>
            <NextLink href='/'>
                <Button colorScheme='teal'>Return to Home</Button>
            </NextLink>
        </Box>
    </Container>
)

export default NotFound