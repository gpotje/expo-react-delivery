import React,{useCallback,useEffect,useState} from "react";
import { Box,FlatList,Pressable,Text } from "native-base";
import { Feather } from '@expo/vector-icons'


import Card from "../../componentes/Card";
import api from '../../services/api';


export default function Home() {
  const [defaultData, setDefaultData] = useState({});

  const produtos = useCallback(() => {
    const getProdutos = async () => {
      await api
        .get("/produto/all")
        .then((res) => {
          setDefaultData(res.data);
         
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProdutos();
  }, []);

  useEffect(() => {
    produtos();
  }, [produtos]);

  return (
    
    <Box flex={1}  backgroundColor="#fafafa" paddingY={14}> 

    
    <Box flexDirection="row" justifyContent="space-between" alignItems="center" paddingX={5} >
    <Text fontSize={24}>Delivery</Text>

    <Pressable alignItems="center"  onPress={ () => navigation.navigate("Cart")}>
        <Box alignItems="center" backgroundColor="#FC0303" justifyContent="center"
        w={5} h={5} borderRadius={10} position="absolute" zIndex={99}
        bottom={-2} left={-4} fontSize={11}
        >1</Box>
        <Box>
          <Feather 
          name='shopping-cart'
          size={35}
          color="#000"
          />
        </Box>
    </Pressable>
    </Box>  
      
   
        <FlatList
            data={defaultData}
            renderItem={({item})=> < Card data={item}/>}
            showsVerticalScrollIndicator={false}
          />
      
   
    </Box>
  )


}