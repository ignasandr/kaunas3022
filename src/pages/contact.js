import React from "react"
import { Box, ChakraProvider } from "@chakra-ui/react"
import Layout from "./components/layouts/Layout"
import theme from "../gatsby-plugin-chakra-ui/theme"

export default function App() {
  return (
    <ChakraProvider theme={theme}>
        <Layout>
            <Box>Contact us</Box>
        </Layout>
    </ChakraProvider>
  )
}