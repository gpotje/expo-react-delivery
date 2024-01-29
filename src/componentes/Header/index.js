import React from "react";
import {  Box, Pressable, HStack, Avatar, Icon,Image } from "native-base";

import { Feather } from '@expo/vector-icons';



export default function Header() {
    return (
        <Box  backgroundColor="#F40404" flexDirection="column" safeArea  >

        <HStack padding={4} w="100%" alignItems="center" justifyContent="space-between" >
          
          <Box>
            <Pressable>
              <Icon
                as={Feather}
                name="menu"
                size={7}
                color="#000"
              />
            </Pressable>

          </Box>
          
          <Box rounded="md" flexDir="row" alignItems="center">
            <Pressable>
            <Avatar
                source={{uri: "https://sujeitoprogramador.com/steve.png"}}
                height={10}
                width={10}
              />
            </Pressable>

          </Box>

        </HStack>

        </Box>
    )
  }