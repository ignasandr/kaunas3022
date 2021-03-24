import React from "react"
import { Center, Text, Box, Image, useColorMode } from "@chakra-ui/react"
import * as styles from "./404.module.css"
import voidCats from "../images/backgrounds/voidCats.png"


export default function NotFound() {
  const { colorMode } = useColorMode();

  return (
    <Center w="100%" h="70vh" flexDirection="column">
      <Text fontWeight="200" fontSize="xl" align="justify">When you pspspspspsps into the void, sometimes it pspspspspspsps's back.</Text>
        <Box m={5}>
            <Image src={voidCats} alt="Trans" className={colorMode === 'dark' ? styles.standard : styles.inverted}/>
        </Box>
    </Center>
  )
}