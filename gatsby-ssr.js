import React from "react"
import Layout from "./src/pages/components/layouts/Layout"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import theme from "./src/gatsby-plugin-chakra-ui/theme"

export const wrapPageElement = ({ element, props }) => {
    return (
      <ChakraProvider theme={theme}>
        <Layout {...props}>{element}</Layout> 
      </ChakraProvider>
    )
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <ColorModeScript
      initialColorMode={theme.config.initialColorMode}
      key="chakra-ui-no-flash"
    />,
  ])
}