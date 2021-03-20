import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import "@fontsource/work-sans/200.css"
import "@fontsource/work-sans/300.css"
import "@fontsource/work-sans/400.css"
import "@fontsource/work-sans/500.css"

// const config = {
//   initialColorMode: "light",
//   useSystemColorMode: false,
// }

// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   }
// }

// const global = {
//     styles: {
//         global: {
//                 body: {
//                     bg: "#000",
//                     color: "red"

//             }
//         }
//     }
// }

const theme = extendTheme({
    initialColorMode: "dark",
    useSystemColorMode: false,
    styles: {
        global: (props) => ({
          body: {
            fontFamily: "Work Sans",
            bg: mode("white", "#1a202c")(props),
            color: mode("black", "white")(props)
          }
        })
    }
  });


export default theme