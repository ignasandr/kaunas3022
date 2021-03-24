import React from "react"
import { Center, Image, useColorMode } from "@chakra-ui/react"
import * as styles from "./about.module.css"
import trans from "../images/backgrounds/transHuman.png"


export default function About() {
  const { colorMode } = useColorMode();

  return (
    <Center w="100%" h="70vh">
      <Image src={trans} alt="Trans" className={colorMode === 'light' ? styles.standard : styles.inverted}/>
    </Center>
  )
}
