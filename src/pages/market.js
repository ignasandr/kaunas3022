import React from "react";
import { Box, Image, Badge, Center, Flex } from "@chakra-ui/react";
import { Link, graphql } from "gatsby";

export default function Market({ data }) {

  return (
    <Center w="90vw">
      <Flex flexWrap="wrap" justifyContent="space-around">
        {data.allMdx.edges.map((edge) => {
          return <Card {...edge.node.frontmatter} slug={edge.node.slug} key={edge.node.frontmatter.id} />;
        })}
      </Flex>
    </Center>
  );
}

const Card = ({ imageUrl, imageAlt, collection, title, formattedPrice, slug }) => {
  return (
  <Link to={"/" + slug}>
    <Box
      maxW="xs"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      mt="5"
      cursor="pointer"
    >
        <Box px="5" pt="5" maxH="xs" overflow="hidden">
          <Image src={imageUrl} alt={imageAlt} objectFit="cover"/>
        </Box>

        <Box px="5" pb="3" pt="2">
          <Box fontStyle="italic">{collection}</Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Box>

          { formattedPrice && <Badge>{formattedPrice}</Badge>}
        </Box>
    </Box>
  </Link>
  );
};

export const query = graphql`
  query AllMarketItems {
    allMdx(limit: 1000, sort: { order: ASC, fields: [frontmatter___id] }) {
      edges {
        node {
          slug
          frontmatter {
            id
            title
            imageUrl
            imageAlt
            collection
            formattedPrice 
          }
        }
      }
    }
  }
`;
