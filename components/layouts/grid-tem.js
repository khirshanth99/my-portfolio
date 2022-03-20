import Image from 'next/image';
import {Global} from "@emotion/react";
import  {Box,Text,LinkBox,LinkOverlay} from "@chakra-ui/react";
import NextLink from 'next/link';
export const GridItem = ({children,href,title,thumbnail}) => (
  <Box width="100%" align='center'>
     <LinkBox cursor="pointer">
       <Image src={thumbnail} className="grid-item-thumbnail" loading='lazy' placeholder="blur"/>
       <LinkOverlay href={href} target="_blank">
           <Text mt={2}>{title}</Text>
       </LinkOverlay>
       <Text fontSize={14}>{children}</Text>
     </LinkBox> 
  </Box>
)
export const WorkGridItem = ({children,id,thumbnail,title}) => (
    <Box width="100%" align='center'>
      <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
      <Image src={thumbnail} className="grid-item-thumbnail" loading='lazy' placeholder="blur"/>
      <LinkOverlay href={`/works/${id}`} target="_blank">
           <Text mt={2} bold={true} fontSize={20}>{title}</Text>
       </LinkOverlay>
       <Text fontSize={14}>{children}</Text>
      </LinkBox>
      </NextLink>
  </Box>
)
export const GridItemStyle = () =>  (
    <Global  styles={`
      .grid-item-thumbnail{
          border-radius:12px
      } 
    `}/>
)