import React from "react";
import { graphql } from "gatsby";
import { Center, Stack, Text } from "@chakra-ui/layout";

export default function MarketItem({ data }) {
    const { title, imageUrl, imageAlt, videoUrl, CID, collection, formattedPrice } = data.mdx.frontmatter;
  return (
      <Center>
          <Stack>
          <Text>{title}</Text>
          <Text>{imageUrl}</Text>
          <Text>{imageAlt}</Text>
          <Text>{videoUrl ? "Yes" : "No"}</Text>
          <Text>{CID}</Text>
          <Text>{collection}</Text>
          <Text>{formattedPrice}</Text>
        </Stack>
      </Center>
  )
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
