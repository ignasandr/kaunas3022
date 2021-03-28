import React from "react";
import { Box, Image, Badge, Center, Flex } from "@chakra-ui/react";
import { Link, graphql } from "gatsby";

// const marketItems = [
//   {
//     imageUrl:
//       "https://gateway.pinata.cloud/ipfs/QmPhmst9Mnk1dBqs49jCzeexYZkBFojNgCKze6fKJRBpWM/collections/CulturalAppropriation.jpg",
//     imageAlt: "Cultural Appropriation",
//     collection: "Postcards from the future",
//     title: "Cultural Appropriation",
//     formattedPrice: "0.3 KSM",
//   },
//   {
//     imageUrl:
//       "https://gateway.pinata.cloud/ipfs/QmPhmst9Mnk1dBqs49jCzeexYZkBFojNgCKze6fKJRBpWM/collections/crashLanding.jpg",
//     imageAlt: "Crash Landing",
//     collection: "Postcards from the future",
//     title: "Cultural Appropriation",
//     formattedPrice: "0.3 KSM",
//   },
//   {
//     imageUrl:
//       "https://gateway.pinata.cloud/ipfs/QmPhmst9Mnk1dBqs49jCzeexYZkBFojNgCKze6fKJRBpWM/collections/freedom.jpg",
//     imageAlt: "Freedom",
//     collection: "Postcards from the future",
//     title: "Freedom",
//     formattedPrice: "0.3 KSM",
//   },
//   {
//     imageUrl:
//       "https://gateway.pinata.cloud/ipfs/QmPhmst9Mnk1dBqs49jCzeexYZkBFojNgCKze6fKJRBpWM/collections/giveUpSooner.jpg",
//     imageAlt: "Give Up Sooner",
//     collection: "Postcards from the future",
//     title: "Give Up Sooner",
//     formattedPrice: "0.3 KSM",
//   },
//   {
//     imageUrl:
//       "https://gateway.pinata.cloud/ipfs/QmPhmst9Mnk1dBqs49jCzeexYZkBFojNgCKze6fKJRBpWM/collections/theGarden.jpg",
//     imageAlt: "The Garden of Industrial Strength",
//     collection: "Postcards from the future",
//     title: "The Garden of Industrial Strength",
//     formattedPrice: "0.3 KSM",
//   },
//   {
//     imageUrl:
//       "https://gateway.pinata.cloud/ipfs/Qma1G36jzm3dPzgzL4fF6yF5YYw1uH8KUEfYG2ufZGKVV5",
//     imageAlt: "Sand Castle",
//     collection: "Messages from the country",
//     title: "Sand Castle",
//     formattedPrice: "0.3 KSM",
//   },
// ];

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
