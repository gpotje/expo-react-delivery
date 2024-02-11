import React from "react"
import { Box, Pressable,Image,Text } from "native-base";



export default function Card({data, addToCart}) {
    return (
        <Box borderWidth={1} borderRadius={10} w="90%"
          marginX={2} borderColor="#FC0303"
          padding={2} flexDirection="row"
          alignItems="center" justifyContent="space-between"
          marginY={1}
          >
            <Pressable onPress={addToCart}> 
             <Box flexDirection="row"> 
                  <Image source={{
                          uri: data.imgBase64
                        }} alt="Alternate Text" size={100} borderRadius={10} />
                  <Box>
                    <Text fontWeight='bold'> {data.nome}</Text>
                    <Text > R$:{data.preco}</Text>
                  
                  </Box>
              </Box>
              
            </Pressable>
        </Box>  
 )
 }