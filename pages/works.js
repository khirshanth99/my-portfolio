import {Container,Heading,SimpleGrid,Divider,useColorModeValue} from "@chakra-ui/react"
import { WorkGridItem } from "../components/layouts/grid-tem"
import Section from "../components/layouts/section"
import VSLOGO from '../public/vs.png';
import LFLOGO from '../public/lf.png';
import Layout from '../components/layouts/article';
import ISLOGO from '../public/is.jpg'
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
   <Section delay={0.5}>
     <Divider my={6}/>
           <WorkGridItem id='illumnsense' title='illumnsense' thumbnail={ISLOGO}>
           Illumesense is a Data Analytics and intelligent Telehealth software platform, real-world health and benchmark data, with analytics dashboards.
           </WorkGridItem>
      </Section>
 </Container>
 </Layout>
  )
}

export default Works