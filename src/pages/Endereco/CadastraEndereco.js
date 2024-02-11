import React,{useCallback,useEffect,useState,useContext} from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, } from "native-base";
import api from '../../services/api';
import { AuthContext } from "../../context/auth"



export default function CadastraEndereco() {
  const { navigation,token } = useContext(AuthContext);

  
  return (
    
    <Box flex={1} background="#ECE8E8">
        
            <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290" py="8">
          
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>CEP:</FormControl.Label>
                <Input />
                <Button mt="2" colorScheme="indigo" background="#FC0303">
                Busca por CEP
              </Button>
              </FormControl>
              <FormControl>
                <FormControl.Label>logradouro:</FormControl.Label>
                <Input  />
              </FormControl>
              <FormControl>
                <FormControl.Label>Confirma Senha:</FormControl.Label>
                <Input type="password" />
              </FormControl>
              <Button mt="2" colorScheme="indigo" background="#FC0303">
                Cadastrar
              </Button>
            </VStack>
          </Box>
          </Center>

</Box>
  )


}