import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

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
    initialColorMode: "light",
    useSystemColorMode: false,
    styles: {
        global: (props) => ({
          body: {
            bg: mode("white", "black")(props),
            color: mode("red.500", "red.500")(props)
          }
        })
    }
  });


export default theme