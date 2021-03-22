import React, { useState } from "react"
import { Flex, HStack, Box, useColorMode, Fade } from "@chakra-ui/react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AnimateSharedLayout, motion } from "framer-motion"

const MenuItems = ["Home", "About", "Market", "Contact"];

export default function Header () {
    const { colorMode, toggleColorMode } = useColorMode();
    const [ selected, setSelected ] = useState(MenuItems[0]);
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
            <AnimateSharedLayout>
              <HStack spacing="5" mr={10} fontSize="2xl" fontWeight="400">
                { MenuItems.map((name) => {
                  const trimmed = "/" + name.replace(/\s+/g, '').toLowerCase();
                  return(<Item
                        trimmed={trimmed}
                        name={name}
                        isSelected={selected === name}
                        color={colorMode === 'dark' ? 'red' : '#3182CE'}
                        onClick={() => {
                          setSelected(name);
                        }}
                      />)
                })}
              </HStack>
            </AnimateSharedLayout>
        </Flex>);

}

const Item = ({ trimmed, name, isSelected, color, onClick}) => {
  console.log(trimmed, name, isSelected, color);
  return (
    <Link key={trimmed} to={name === "Home" ? "/" : trimmed} style={{ position: 'relative' }} onClick={onClick}>
      <Box _hover={{ color: `${color}`}} color={isSelected ? `${color}` : '' }>
        {name}
        {isSelected && (
          <motion.div
            layoutId="outline"
            className="outline"
            initial={false}
            transition={spring}
            style={{ position: 'absolute', width: '100%', height: '3px', backgroundColor: `${color}`, bottom: '-5px' }}
          /> 
        )}
      </Box>
    </Link>
  )
}

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30
};