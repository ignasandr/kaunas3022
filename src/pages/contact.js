import React from "react";
import * as styles from "./contact.module.css";
import { Link, Center, Image, useColorMode, HStack } from "@chakra-ui/react";
import soundcloud from "../images/icons/soundcloud.svg";
import instagram from "../images/icons/instagram.svg";
import facebook from "../images/icons/facebook.svg";
import email from "../images/icons/email.svg";

const socialIcons = [
  {
    name: "soundcloud",
    link: "https://www.soundcloud.com/kaunas-3022/",
    icon: soundcloud,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/kaunas3022/",
    icon: instagram,
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/kaunas3022/",
    icon: facebook,
  },
  {
    name: "email",
    link: "mailto:kaunas3022@gmail.com",
    icon: email,
  },
];

export default function Contact() {
  const { colorMode } = useColorMode();

  return (
    <Center w="100%" h="70vh">
      <HStack spacing="3vw">
        {socialIcons.map((icon) => {
          return (
            <Link key={icon.name} href={icon.link} isExternal>
              <Image
                src={icon.icon}
                alt={icon.name}
                boxSize="35px"
                className={
                  colorMode === "light" ? styles.standard : styles.inverted
                }

              />
            </Link>
          );
        })}
      </HStack>
    </Center>
  );
}
