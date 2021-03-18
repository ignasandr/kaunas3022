import React from "react"
import { Flex, HStack, Box, useColorMode } from "@chakra-ui/react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const MenuItems = ["Home", "About", "Market", "Contact"];

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return(
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
        >
            <Box onClick={toggleColorMode} mt={4} ml={4}>
              <Link to="/"><StaticImage src="../../../images/icon.jpg" alt="Kaunas3022" height={100}/></Link>
            </Box>
            <HStack spacing="4" mr={6} fontSize="xl">
              { MenuItems.map((name) => {
                const trimmed = "/" + name.replace(/\s+/g, '').toLowerCase();
                return(<Link key={trimmed} to={name === "Home" ? "/" : trimmed}>{name}</Link>)
              })}
            </HStack>
        </Flex>);
}

export default Header