import {Container,Heading,SimpleGrid,Divider,useColorModeValue} from "@chakra-ui/react"
import { WorkGridItem } from "../components/layouts/grid-tem"
import Section from "../components/layouts/section"
import VSLOGO from '../public/vs.png';
import LFLOGO from '../public/lf.png';
import Layout from '../components/layouts/article';
import ISLOGO from '../public/is.jpg';
import JPLOGO from '../public/jp.jpg';
import RBLOGO from '../public/rb.jpg';
const Works = () => {
  return (
    <Layout>
 <Container  color={useColorModeValue('black','white')}>
   <Heading as='h3' fontSize={20} mb={3}>Works</Heading>
   <SimpleGrid columns={[1,1,2]} gap={6}>
      <Section delay={0.5}>
           <WorkGridItem id='virtualstaff' title='virtualstaff' thumbnail={VSLOGO}>
               A freelancing platform,with SEO,Chat,Video call,TimeTracker,Admin panel,Payment gateway.[client-project]
           </WorkGridItem>
      </Section>
      <Section delay={0.5}>
           <WorkGridItem id='livefurnish' title='livefurnish' thumbnail={LFLOGO}>
               A 3D tool(web/desktop) for designing Living Rooms.[client-project]
           </WorkGridItem>
      </Section>
   </SimpleGrid>
   <SimpleGrid columns={[1,1,2]} gap={6}>
      <Section delay={0.5}>
         <WorkGridItem id='illumnsense' title='illumnsense' thumbnail={ISLOGO}>
           Illumesense is a Data Analytics and intelligent Telehealth software platform, real-world health and benchmark data, with analytics dashboards.
           </WorkGridItem>
      </Section>
      <Section delay={0.5}>
           <WorkGridItem id='bigissue' title='bigissue' thumbnail={LFLOGO}>
           The Big issue is totally work on digital currency transactions  where block chain involved with hedera hash graph crypto currency.The big issue will have three roles big issue admin, customer and super admin.
           </WorkGridItem>
      </Section>
   </SimpleGrid>
   <SimpleGrid columns={[1,1,2]} gap={6}>
      <Section delay={0.5}>
         <WorkGridItem id='justpayme' title='justpayme' thumbnail={JPLOGO}>
           The objective of this project is to develop Payment Gateway through Hedera Block chain.Central Banksdelivers a digital token infrastructure that enables Central Banks to mint, manage and distribute their CBDC to corresponding Commercial Bank.
           </WorkGridItem>
      </Section>
      <Section delay={0.5}>
           <WorkGridItem id='resumebuilder' title='resumebuilder' thumbnail={RBLOGO}>
           My own project.
           </WorkGridItem>
      </Section>
   </SimpleGrid>
 </Container>
 </Layout>
  )
}

export default Works