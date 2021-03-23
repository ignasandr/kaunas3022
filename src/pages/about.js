import React from "react"
import { Center, useColorMode } from "@chakra-ui/react"
import * as containerStyles from "./about.module.css"
import trans from "../images/backgrounds/transHuman.png"


export default function About() {
  const { colorMode } = useColorMode();

  return (
    <Center w="100%" h="70vh">
      {/* <Text fontWeight="200" fontSize="3xl">Welcome to the anti-climatic collapse of your reality</Text> */}
      <img src={trans} alt="Trans" className={colorMode === 'light' ? containerStyles.standard : containerStyles.inverted}/>
    </Center>
  )
}
