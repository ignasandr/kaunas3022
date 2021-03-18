import React from "react"
import { Flex } from "@chakra-ui/react" 
import Header from "../sections/Header"

export default function Layout(props) {
  return (
    <Flex
      direction="column"
      align="center"
      m="0 auto"
    >
      <Header />
      {props.children}
    </Flex>
  )
}