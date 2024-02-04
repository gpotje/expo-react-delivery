import React, { Component, useState } from 'react';
import {  Box,Button, Text } from "native-base";

export default function CartPedido({data}){
   
  console.log("aqui:",data)
  return (
    <Box borderWidth={1} borderRadius={2} w="90%"
      marginX={2} borderColor="#000"
      padding={2} flexDirection="row"
      alignItems="center" justifyContent="space-between"
      marginY={1}
      >
        <Box>
            <Box _text={{fontWeight:"bold", fontSize:15}}> {data.status}</Box>
            <Box flexDirection="row" _text={{ fontSize:15}}> R$:{data.formaPagamento}</Box>
        </Box>
        
      </Box>
  
 )
  

}
