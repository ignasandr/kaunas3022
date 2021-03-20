import React from "react"
import { Text, Center, ChakraProvider } from "@chakra-ui/react"
import Layout from "./components/layouts/Layout"
import theme from "../gatsby-plugin-chakra-ui/theme"

export default function App() {
  return (
    <ChakraProvider theme={theme}>
        <Layout>
          <Center w="100%" h="70vh">
            <Text fontWeight="200" fontSize="3xl">Welcome to the anti-climatic collapse of your reality</Text>
          </Center>
        </Layout>
    </ChakraProvider>
  )
}
