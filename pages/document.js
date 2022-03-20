import { colorModeScript} from "@chakra-ui/react";
import NextDocument,{Head,Html,Main,NextScript}  from "next";
import Theme from '../components/layouts/theme';


export default  class Document extends NextDocument {
   render(){
       return (
           <Html lang="en" >
               <Head/>
               <body>
                   <ColorModeScript initialColorMode={Theme.config} />
                   <Main/>
                   <NextScript/>
               </body>
           </Html>
       )
   }
}