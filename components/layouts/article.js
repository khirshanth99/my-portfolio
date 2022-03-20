import {motion} from "framer-motion";
import Head from 'next/head';
import {GridItemStyle} from '../layouts/grid-tem';

const variants = {
    hidden: { opacity: 0,x:0,y:20},
    enter: { opacity: 1,x:0,y:0},
    exit: { opacity: 0,x:0,y:20},
}

const Layouts = ({children,title}) => (
    <motion.article animate='enter' initial='hidden'  exit='exit' transition={{duration:0.4,type: 'easeIn'}} variants={variants} style={{position: 'relative'}}>
         <>{title && ( <Head>
                 <title>{title} - Khirshanth</title>
             </Head>)}
             {children}
             <GridItemStyle/>
             </>
    </motion.article>
)
export default Layouts