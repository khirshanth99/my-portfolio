import {Box,Container, Heading} from "@chakra-ui/react"


const  Page = () => {
  return (
   <Container >
      <Box borderRadius='lg' bg='red' p={3} mb={6} align='center'>
        Hello !.I am a Frontend developer.
      </Box>
      <Box display={{md:"flex"}}>
         <Box flexGrow={1}>
            <Heading as="h2" variant='page-title'>
              Khirshanth M
            </Heading>
            <h2>2+ years of experience (Designing / Development)</h2>
         </Box>
      </Box>
   </Container>
  )
}
export default Page