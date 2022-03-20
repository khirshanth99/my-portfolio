import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";


const styles = {
    global : props => ({
       body :{
           bg:mode ('#f0e7db' , '#202023')(props),
           color: mode('#fff','#000')(props)
       }
    })
}
const components = {
    Heading : {
        variants :{
            'section-title': {
                textDecoration: 'underline',
                textUnderlineOffset:6,
                fontSize:20,
                textDecorationColor:'#525252',
                textDecorationThickness:4,
                marginTop:3,
                marginBottom:4,
                color:'whiteAlpha'
            }
        }
    },
    Link : {
        baseStyle :props => ({
            color:mode("3d7aed",'#ff63c3')(props),
            textUnderlineOffset:3
        })
    }
}
const fonts = {
    Heading :'M PLUS ROUNDED 1C'
}

const colors = {
    glassTeal : '#88ccca'
}
const config = {
    initialColorMode: 'dark',
    useSystemColorMode:true
}
const theme   = extendTheme({
    config,
    colors,
    fonts,
    styles,
    components
})
export default theme