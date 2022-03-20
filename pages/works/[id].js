import { Container,Badge,Link,ListItem,List,useColorModeValue } from '@chakra-ui/react';
import {ExternalLinkIcon} from '@chakra-ui/icons';
import {Title,Meta,WorkImage} from '../../components/layouts/work';
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/layouts/paragraph'
import LOGOONE from '../../public/vsone.png';
import LOGOTWO from '../../public/vstwo.png';
import { useRouter } from "next/router";
import { PROJECT_DATA } from '../../config/constant';
import { useEffect,useState } from 'react';

const Work = () => {
    const {query} = useRouter();
    const name = query?.id ?? null;
    const [data,setData] = useState();
   useEffect(() => {
    const data = PROJECT_DATA.map((e) => {
        if(Object.keys(e) == name){
           setData(e[name])
        }        
 })
console.log(data,name);
   },[name])
    return (
   <Layout title="Virtualstaff">
       <Container  color={useColorModeValue('black','white')} >
           <Title>
               {data?.title} <Badge>{data?.title}</Badge>
           </Title>
           <Paragraph>
               {data?.description}
           </Paragraph>
           <List ml={4} my={4}>
           <ListItem>
               <Meta>WEBSITE</Meta>
               <Link href={data?.url} target='_blank'>
               {data?.url}<ExternalLinkIcon mx={2}/>
               </Link>
           </ListItem>
           <ListItem>
               <Meta>STACK</Meta>
               <span>
                 {data?.stack}
               </span>
           </ListItem>
           <ListItem>
               <Meta>THINGS LEARNED &hearts;</Meta>
               <span>
                {data?.learned}
               </span>
           </ListItem>
           </List>
           {data?.images?.map((e) => (   <WorkImage src={e}/>))}
          
       </Container>

   </Layout>
    )
}
export default Work