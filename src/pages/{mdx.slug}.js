import React from "react";
import { graphql, Link } from "gatsby";
import { Center, Text, Flex, AspectRatio, Box, Badge } from "@chakra-ui/layout";
import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Button,
  IconButton,
  Image
} from "@chakra-ui/react";

export default function MarketItem({ data }) {
  const {
    title,
    imageUrl,
    imageAlt,
    videoUrl,
    collection,
    formattedPrice,
  } = data.mdx.frontmatter;

  return (
    <Center>
      <Flex flexDirection="column" w={["70vw", "60vw", "50vw", "40vw"]}>
        <Box style={{ position: "relative "}}>
          <Link to="/market" style={{ position: "absolute", left: -50, top: 8 }}><IconButton aria-label="back" icon={<ArrowBackIcon/>} /></Link>
          <Text w="100%" textAlign="center" my="3" fontSize="xl" fontWeight="bold">
            {title}
          </Text>
        </Box>
        <Box>
          {videoUrl ? (
            <Video title={title} src={videoUrl} />
          ) : (
            <Image src={imageUrl} alt={imageAlt} />
          )}
        </Box>
          <Box my="3" w="100%">
            <Flex justify="space-between" align="center">
              <Box fontSize={{ base: "xs", md: "sm", lg: "md"}}>
                <Text>Name: {title}</Text>
                <Text>Collection: {collection}</Text>
                <Text>Price: {formattedPrice ? <Badge>{formattedPrice}</Badge> : "Not for sale"}</Text>
              </Box>
              <Button onClick={()=> alert("coming soon")}>BUY</Button>
            </Flex>
          </Box>
      </Flex>
    </Center>
  );
}

export const query = graphql`
  query MarketItemBySlug($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      slug
      frontmatter {
        title
        imageUrl
        imageAlt
        videoUrl
        CID
        collection
        formattedPrice
      }
    }
  }
`;

const Video = ({ title, src }) => {
  return (
    <AspectRatio ratio={1}>
      <Box as="iframe" title={title} src={src} allowFullScreen />
    </AspectRatio>
  );
};
