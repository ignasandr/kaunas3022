import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import "@fontsource/work-sans/200.css"
import "@fontsource/work-sans/300.css"
import "@fontsource/work-sans/400.css"
import "@fontsource/work-sans/500.css"
import "@fontsource/work-sans/300-italic.css"

const theme = extendTheme({
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    },
    styles: {
        global: (props) => ({
          body: {
            fontFamily: "Work Sans",
            bg: mode("#e5dfd3", "#1a202c")(props),
            color: mode("black", "white")(props)
          }
        })
    }
  });


export default theme