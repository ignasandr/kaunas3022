import React from "react"
import { Flex, HStack, Box } from "@chakra-ui/react"
import { Link } from "gatsby"

const MenuItems = ["Home", "About", "Blog", "Market", "Contact"];

const Header = () => {
    return(
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
        >
            <Box>
              <Link to="/">LOGO</Link>
            </Box>
            <HStack spacing="4">
              { MenuItems.map((name) => {
                const trimmed = name.replace(/\s+/g, '').toLowerCase();
                return(<Link key={trimmed} to={trimmed}>{name}</Link>)
              })}
            </HStack>
        </Flex>);
}

export default Header