import {Box,Container, Heading,Button} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import Profile from '../public/profile.jpg';
import Image from 'next/image';
import Section from '../components/layouts/section';
import Paragraph from '../components/layouts/paragraph';
import {ChevronRightIcon} from "@chakra-ui/icons";
import NextLink from 'next/link';
import {BioYear,BioSection} from '../components/layouts/bio';
import Layout from '../components/layouts/article'
const  Page = () => {
  return (
    <Layout>
   <Container   color={useColorModeValue('black','white')} >
      <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')}p={3} mb={6} align='center'>
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
      <Box flexShrink={0} mt={{base:4,md:0}} ml={{md:6}} align='center' >
          <Image 
           borderColor='whiteAlpha.800'
           borderWidth={2}
           borderStyle='solid'
           maxWidth='100px'
           display='inline-block'
           borderRadius={50}
           src={Profile}
          />
      </Box>
      <Section delay={0.5}>
        <Heading as='h3' variant='section-title'>
            work
        </Heading>
        <Paragraph>
           Khirshanth is a Frontend Developer having 2+ years of experience in  design and development of progressive web apps.I love to be apart of Web development and worked on project based on frontend development using React Js.Also my area of expertise are DSA,Javascript,ReactJs,NextJs,Python.
        </Paragraph>
       <Box align='center' my={4}>
         <NextLink href='/works' passhref>
            <Button
              rightIcon={<ChevronRightIcon/>}
              colorScheme='teal'
            >My portfolio</Button>
         </NextLink>

       </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
            Bio
        </Heading>
        <BioSection>
            <BioYear>1999</BioYear>
            Born in Kanyakumari,TamilNadu,India
        </BioSection>
        <BioSection>
            <BioYear>2020</BioYear>
            Completed the Bachelor&apos;s degree in Computer Science at K.S.Rangasamy college of technology.
        </BioSection>
        <BioSection>
            <BioYear>2020 -present</BioYear>
          Working as Frontend Engineer at Colan Infotech
        </BioSection>
      </Section>
      <Section delay={0.2}>
      <Heading as='h3' variant='section-title'>
            I &hearts;

        </Heading>
        <Paragraph>Music,Photography,Solving problems...</Paragraph>
      </Section>
   </Container>
   </Layout>
  )
}
export default Page