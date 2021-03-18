import React from "react"
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react"
import Layout from "./components/layouts/Layout"

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const theme = extendTheme({ colors })

export default function App() {
  return (
    <ChakraProvider theme={theme}>
        <Layout>
          <Box w={["300px", "450px", "600px", "750px"]} mx="auto" bgColor="red" h="15vh">Hello babes!</Box>
        </Layout>
    </ChakraProvider>
  )
}
