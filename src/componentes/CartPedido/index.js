import React, { Component, useState } from 'react';
import {  Box,Button, Text } from "native-base";

export default function CartPedido({data}){
   
  console.log("aqui:",data)
  return (
    <Box borderWidth={1} borderRadius={2} w="90%"
      marginX={2} borderColor="#FC0303"
      padding={2} flexDirection="row"
      alignItems="center" justifyContent="space-between"
      marginY={1}
      >
        <Box>
            <Box _text={{fontWeight:"bold", fontSize:15}} flexDirection='row'> Estado:{data.status}</Box>
            <Text flexDirection="row" fontWeight='bold'>Pag:{data.formaPagamento}</Text>
            <Text flexDirection="row" fontWeight='bold'>Valor:{data.valorPedido}</Text>
            <Text flexDirection="row" fontWeight='bold'>Troco:{data.troco}</Text>
            <Text flexDirection="row" fontWeight='bold'>Itens:{data.produtos[0]["id"]}</Text>
        </Box>
        
      </Box>
  
 )
  

}
