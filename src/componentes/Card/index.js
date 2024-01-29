import React from "react"
import { Box, Text,Image,AspectRatio, Center } from "native-base";


export default function Card({data}) {
    return (
    
      
      <Box flex={1}  alignItems="center" >
        <Text >{data.nome}</Text>

        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700"
                }} _web={{
                  shadow: 2,
                  borderWidth: 0
                }} _light={{
                  backgroundColor: "gray.50"
                }} >
                    <Box>
                      <AspectRatio w="100%" ratio={16 / 9}>
                        <Image source={{
                        uri: data.imgBase64
                      }} alt="image" />
                      </AspectRatio>
                      </Box>
              </Box>

        <Text > Preço: {data.preco}</Text>
      </Box>
  
    )
  
  
  }