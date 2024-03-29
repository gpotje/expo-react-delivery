import React, { useState, useContext } from 'react';
import { Box,Pressable,Text,Menu,HamburgerIcon } from "native-base";
import { Feather,FontAwesome  } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../../context/CartContext'


export default function HeaderHome() {

  const { cart } = useContext(CartContext)

  const navigation = useNavigation();

  return (
    
    <Box backgroundColor="#FC0303" paddingY={14}> 
                
            <Box flexDirection="row" justifyContent="space-between" alignItems="center" paddingX={5} >
                  <Menu w="190" trigger={triggerProps => {
                            return <Pressable {...triggerProps}>
                                        <Feather 
                                      name='menu'
                                      size={30}
                                      color="#000"
                                      />
                                  </Pressable>;
                          }}>
                          <Menu.Item onPress={ () => navigation.navigate("Login")}>Login</Menu.Item>
                          <Menu.Item onPress={ () => navigation.navigate("Pedidos")}>Acompanhar pedido</Menu.Item>
                          <Menu.Item onPress={ () => navigation.navigate("Endereco")}>Endereco</Menu.Item>
                              
                              
                  </Menu>
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