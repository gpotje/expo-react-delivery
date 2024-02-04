import React, { useState, useContext } from 'react';
import { Box,Pressable,Text,Menu,HamburgerIcon } from "native-base";
import { Feather,FontAwesome  } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../../context/CartContext'
import Login from '../../pages/Login';


export default function HeaderHome() {

  const { cart,addItemCart } = useContext(CartContext)

  const navigation = useNavigation();

  return (
    
    <Box backgroundColor="#FC0303" paddingY={14}> 
                
            <Box flexDirection="row" justifyContent="space-between" alignItems="center" paddingX={5} >
                   <Pressable  onPress={ () => navigation.navigate("Login")}>
                            <Box>
                              <Feather 
                                name='user'
                                size={30}
                                color="#000"
                                />
                            </Box>
                    </Pressable>
                 <Text fontSize={30} fontWeight='bold'>Delivery</Text>
                    
                     <Pressable alignItems="center"  onPress={ () => navigation.navigate("Cart")}>
                        
                        <Box alignItems="center" backgroundColor="#FCED03" justifyContent="center"
                        w={5} h={5} borderRadius={10} position="absolute" zIndex={99}
                        bottom={-2} left={-4} fontSize={11}
                        >{cart?.length}</Box>
                            <Box>
                                <Feather 
                                name='shopping-cart'
                                size={30}
                                color="#000"
                                />
                            </Box>
                    </Pressable>
            </Box>    
    </Box>
  )


}