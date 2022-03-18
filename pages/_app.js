import '../styles/globals.css'
import {ChakraProvider,} from "@chakra-ui/react";
import Layout from '../components/layouts'

const Website = ({router, Component, pageProps}) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
          <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}
export default Website