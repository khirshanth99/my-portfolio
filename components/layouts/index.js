import Head from 'next/head';
import {Box,Container} from "@chakra-ui/react"
import Navbar from './navbar';
 const Main = ({children,router}) => {
    return (
        <Box as='main' pb={8} color='black'>
             <Head name='viewport' content='width=device-width'>
                 <title>My portfolio</title>
             </Head>
             <Navbar path={router.asPath}></Navbar>
             <Container maxW='container.md' pd={14}>
                 {children}
             </Container>
        </Box>
    )
}
export default Main