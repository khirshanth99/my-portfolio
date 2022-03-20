import '../styles/globals.css'
import {ChakraProvider,} from "@chakra-ui/react";
import Layout from '../components/layouts'
import theme from '../components/layouts/theme'
import Fonts from '../components/layouts/fonts'
import {AnimatePresence} from 'framer-motion'
const Website = ({router, Component, pageProps}) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts/>
      <AnimatePresence initial={true} exitBeforeEnter>
      <Layout router={router}>
          <Component {...pageProps} key={router.route} />
      </Layout>
      </AnimatePresence>
    </ChakraProvider>
  )
}
export default Website