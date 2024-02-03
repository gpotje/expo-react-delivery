import React, { Component, useState } from 'react';
import {  Box,Button, Text } from "native-base";

export default function CartItem({data,addAmount,removeAmount}){
    const [amount,setAmount] = useState(data?.amount)

    function handleIncrease(){
        addAmount();
        setAmount(item => item + 1 )
    }

    function handleDecrease(){
      removeAmount();
      
      if(amount === 0){
        setAmount(0);
        return;
      }

      setAmount(item => item - 1 )
  }


  return (
    <Box borderWidth={1} borderRadius={2} w="90%"
      marginX={2} borderColor="#000"
      padding={2} flexDirection="row"
      alignItems="center" justifyContent="space-between"
      marginY={1}
      >
        <Box>
            <Box _text={{fontWeight:"bold", fontSize:15}}> {data.nome}</Box>
            <Box flexDirection="row" _text={{ fontSize:15}}> R$:{data.preco}</Box>
        </Box>
        <Box flexDirection="row" justifyContent="space-between" justifyItems="center">
          <Button backgroundColor="#FC0303" paddingRight={2}  onPress={handleIncrease}> +</Button>

         <Text paddingX={2} fontSize={20} fontWeight={'bold'} >{amount}</Text> 

          <Button backgroundColor="#FC0303"onPress={handleDecrease}>-</Button>
        </Box>
      </Box>
  
 )
  

}
