import React, { Component, useState } from 'react';
import {  Box,Button, Switch, Text } from "native-base";

export default function CartEndereco({data}){
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   
  console.log("aqui:",data)
  return (
    <Box borderWidth={1} borderRadius={2} w="90%"
      marginX={2} borderColor="#FC0303"
      padding={2} flexDirection="row"
      alignItems="center" justifyContent="space-between"
      marginY={1}
      >
        <Box>
            <Text flexDirection="row" fontWeight='bold'>Logradouro: {data?.logradouro}</Text>
            <Text flexDirection="row" fontWeight='bold'>N°: {data?.numeroCasa}</Text>
            <Text flexDirection="row" fontWeight='bold'>Cep: {data?.cep}</Text>
            <Text flexDirection="row" fontWeight='bold'>Tel1: {data?.tel1}</Text>
            <Text flexDirection="row" fontWeight='bold'>Cidade: {data?.cidade}</Text>
              <Box flexDirection="row" >
                {/* <Text flexDirection="row" fontWeight='bold' fontSize={15}>Endereço Ativo: </Text> */}
                <Switch colorScheme="secondary" value={data?.ativo} />
              </Box>
        </Box>
        
      </Box>
  
 )
  

}
