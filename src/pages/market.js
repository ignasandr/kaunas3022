import React from "react"
import { Box, Image, Badge, Center, Flex } from "@chakra-ui/react"

const marketItems = [
  {
    imageUrl: "https://gateway.pinata.cloud/ipfs/QmPhmst9Mnk1dBqs49jCzeexYZkBFojNgCKze6fKJRBpWM/collections/CulturalAppropriation.jpg",
    imageAlt: "Cultural Appropriation",
    collection: "Postcards from the future",
    title: "Cultural Appropriation",
    formattedPrice: "0.3 KSM",
  },
  {
    imageUrl: "https://gateway.pinata.cloud/ipfs/QmPhmst9Mnk1dBqs49jCzeexYZkBFojNgCKze6fKJRBpWM/collections/crashLanding.jpg",
    imageAlt: "Crash Landing",
    collection: "Postcards from the future",
    title: "Cultural Appropriation",
    formattedPrice: "0.3 KSM",
  },
  {
    imageUrl: "https://gateway.pinata.cloud/ipfs/QmPhmst9Mnk1dBqs49jCzeexYZkBFojNgCKze6fKJRBpWM/collections/freedom.jpg",
    imageAlt: "Freedom",
    collection: "Postcards from the future",
    title: "Freedom",
    formattedPrice: "0.3 KSM",
  },
  {
    imageUrl: "https://gateway.pinata.cloud/ipfs/QmPhmst9Mnk1dBqs49jCzeexYZkBFojNgCKze6fKJRBpWM/collections/giveUpSooner.jpg",
    imageAlt: "Give Up Sooner",
    collection: "Postcards from the future",
    title: "Cultural Appropriation",
    formattedPrice: "0.3 KSM",
  },
  {
    imageUrl: "https://gateway.pinata.cloud/ipfs/QmPhmst9Mnk1dBqs49jCzeexYZkBFojNgCKze6fKJRBpWM/collections/theGarden.jpg",
    imageAlt: "The Garden of Industrial Strength",
    collection: "Postcards from the future",
    title: "The Garden of Industrial Strength",
    formattedPrice: "0.3 KSM",
  },
]

export default function Market() {

  return (
    <Center w="90vw">
      <Flex flexWrap="wrap" justifyContent="space-around">
        {
          marketItems.map( item => {
            return <Card {...item} key={item.title} />
          })
        }
      </Flex>
    </Center>
  )  
}

const Card = ({ imageUrl, imageAlt, collection, title, formattedPrice }) => {
  return (
    <Box maxW="xs" borderWidth="1px" borderRadius="md" overflow="hidden" mt="5">
          <Box px="5" pt="5" maxH="xs" overflow="hidden">
            <Image src={imageUrl} alt={imageAlt} />
          </Box>


          <Box px="5" pb="3" pt="2">
            <Box fontStyle="italic">
              {collection}  
            </Box>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {title}
            </Box>

            <Badge>
              {formattedPrice}
            </Badge>
          </Box>
    </Box>
  )
}

