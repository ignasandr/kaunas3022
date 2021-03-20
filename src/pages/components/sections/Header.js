import React from "react"
import { Flex, HStack, Box, useColorMode, Fade } from "@chakra-ui/react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const MenuItems = ["Home", "About", "Market", "Contact"];

export default function Header () {
    const { colorMode, toggleColorMode } = useColorMode();

    return(
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
        >
            <Box onClick={toggleColorMode} mt={5} ml={5} height={100}>
              <Link to="/">
                <Fade in={colorMode === 'dark'} unmountOnExit>
                  <StaticImage src="../../../images/logos/dark.jpg" height={100} alt="Kaunas 3022" style={{position: "absolute"}}></StaticImage>
                </Fade>
                <Fade in={colorMode === 'light'} unmountOnExit>
                  <StaticImage src="../../../images/logos/light.jpg" height={100} alt="Kaunas 3022" style={{position: "absolute"}}></StaticImage>
                </Fade>
               </Link>
            </Box>
            <HStack spacing="5" mr={10} fontSize="2xl" fontWeight="400">
              { MenuItems.map((name) => {
                const trimmed = "/" + name.replace(/\s+/g, '').toLowerCase();
                return(<Link key={trimmed} to={name === "Home" ? "/" : trimmed}>{name}</Link>)
              })}
            </HStack>
        </Flex>);

}