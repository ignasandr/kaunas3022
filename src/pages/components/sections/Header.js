import React, { useState } from "react";
import { Flex, HStack, Box, useColorMode, Image } from "@chakra-ui/react";
import { Link } from "gatsby";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useLocation } from "@reach/router";
import logo from "../../../images/logos/dark.jpg"
import * as styles from "./Header.module.css"

const MenuItems = ["Home", "About", "Market", "Contact"];

export default function Header() {
  const location = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();
  const [selected, setSelected] = useState(location.pathname);

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%">
      <Box
        onClick={toggleColorMode}
        mt={5}
        ml={5}
        height={100}
        cursor={"pointer"}
      >
        <Image height={100} src={logo} alt="Logo" className={colorMode === 'light' ? styles.standard : styles.inverted}/>
      </Box>
      <AnimateSharedLayout>
        <HStack spacing={{base: 2, sm: 5 }} mr={{base: 3, sm: 10}} fontSize={{base: "3vw", sm: "xl", md: "2xl"}} fontWeight="400">
          {MenuItems.map((name) => {
            const trimmed = "/" + name.replace(/\s+/g, "").toLowerCase();
            return (
              <Item
                key={trimmed}
                trimmed={trimmed}
                name={name}
                isSelected={selected === trimmed}
                color={colorMode === "dark" ? "red" : "#3182CE"} //Blue.500
                onClick={() => {
                  setSelected(trimmed);
                }}
              />
            );
          })}
        </HStack>
      </AnimateSharedLayout>
    </Flex>
  );
}

const Item = ({ trimmed, name, isSelected, color, onClick }) => {
  return (
    <Link
      key={trimmed}
      to={name === "Home" ? "/" : trimmed}
      style={{ position: "relative" }}
      onClick={onClick}
    >
      <Box _hover={{ color: `${color}` }} color={isSelected ? `${color}` : ""}>
        {name}
        {isSelected && (
          <motion.div
            layoutId="outline"
            className="outline"
            initial={false}
            transition={spring}
            style={{
              position: "absolute",
              width: "100%",
              height: "3px",
              backgroundColor: `${color}`,
              bottom: "-5px",
            }}
          />
        )}
      </Box>
    </Link>
  );
};

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};