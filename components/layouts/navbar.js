import Logo from './logo';
import NextLink from 'next/link';
import { Container,Box,Stack,Heading,Flex,Menu,MenuItem,MenuList,MenuButton,IconButton,Link,useColorModeValue} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button';

export const LinkItem = ({children,path,href}) => {
    const active  =  path === href;
    const inactive = useColorModeValue('grey.800','whiteAlpha.800');
    return (
        <NextLink href={href}>
            <Link href
            p={2}
            bg={active ? 'glassTeal' : undefined}
            color={active ? '202023' : inactive}
            >
                {children}
            </Link>
        </NextLink>
    )
}
const Navbar  =props => {
    const { path } = props;
    return ( 
        <Box
         position='nav'
         width="100%"
         as='nav'
         style={{backdropFilter:"blur(10px)"}}
         bg={useColorModeValue('#ffffff40','#20202380')}
         {...props}
        >
          <Container display='flex' align='center' p={2} maxW='container.md' wrap='wrap' justify='space-between'>
              <Flex align='center' mr={5}>
                  <Heading as='h1' letterSpacing='tighter' size='lg'>
                      <Logo/>
                  </Heading>
              </Flex>
              <Stack 
               direction={{md:"row",base:"column"}}
               display={{base:"none",md:"flex"}}
               width={{base:"full",md:"auto"}}
               alignItems='center'
               flexGrow='1'
               mt={{base:"4",nmd:'0'}}
              >
                <LinkItem href='/works'>works</LinkItem>
                <LinkItem href='/posts'>posts</LinkItem>
              </Stack>
              <Box flex='1' align='right'>
                  <ThemeToggleButton/>
                  <Box display={{base:"inline-block"}} ml={2}>
                      <Menu>
                          <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant='outline' aria-label='options'/>
                          <MenuList>
                              <NextLink href='/' passhref>
                              <MenuItem as={Link}>
                                 About
                              </MenuItem>
                              </NextLink>
                              <NextLink href='/works' passhref>
                              <MenuItem as={Link}>
                                 Works
                              </MenuItem>
                              </NextLink>
                              <NextLink href='/posts' passhref>
                              <MenuItem as={Link}>
                                 Posts
                              </MenuItem>
                              </NextLink>
                          </MenuList>
                      </Menu>

                  </Box>
              </Box>
          </Container>
        </Box>
    )
}
export default Navbar