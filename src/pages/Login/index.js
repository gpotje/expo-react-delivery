import React,{useCallback,useEffect,useState} from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, } from "native-base";
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const navigation = useNavigation();
  
  return (
    
      <Box flex={1} background="#ECE8E8">
        
        <Center w="100%">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{color: "warmGray.50"}}>
                  Seja bem vindo ao Delivery !!!
                </Heading>
        
            <VStack space={3} mt="5">
                <FormControl>
                  <FormControl.Label>Email</FormControl.Label>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Senha:</FormControl.Label>
                  <Input type="password" />
                  <Link _text={{ fontSize: "xs",fontWeight: "500",color: "indigo.500"}} alignSelf="flex-end" mt="1">
                    esqueceu a senha?
                  </Link>
                </FormControl>
                <Button mt="2" background="#FC0303">
                  Logar
                </Button>
                <HStack mt="6" justifyContent="center">
                  <Text fontSize="sm" color="coolGray.600" _dark={{
                  color: "warmGray.200"
                }}>
                   Eu sou um novo Usuario.{" "}
                  </Text>
                  <Link _text={{color: "indigo.500",fontWeight: "medium",fontSize: "sm"}} onPress={() => navigation.navigate("Cadastro")} >
                    Cadastrar-se
                  </Link>
                </HStack>
            </VStack>
          </Box>
    </Center>;

   
    </Box>
  )


}