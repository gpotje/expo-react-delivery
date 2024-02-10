import React,{useCallback,useEffect,useState,useContext} from "react";
import { Box,FlatList,Pressable,Text } from "native-base";
import { CartContext } from '../../context/CartContext';

import { useNavigation } from '@react-navigation/native';
import Card from "../../componentes/Card";
import api from '../../services/api';
import HeaderHome from '../../componentes/HeaderHome/index';


export default function Home() {
  const [defaultData, setDefaultData] = useState({});

  
  const { cart,addItemCart } = useContext(CartContext)

  const navigation = useNavigation();

  function handleAddcart(item){
    addItemCart(item)
  }


  const produtos = useCallback(() => {
    const getProdutos = async () => {
      await api
        .get("/produto/all")
        .then((res) => {
          setDefaultData(res.data.content);
         
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
    
    <Box flex={1} backgroundColor="#C4C4C4"> 
       <HeaderHome></HeaderHome> 
        <FlatList
            data={defaultData}
          // keyExtractor={ (item) => String(item.id) }
            renderItem={({item})=> < Card data={item} addToCart={() => handleAddcart(item)}/>}
            showsVerticalScrollIndicator={false}
          />
    </Box>
  )


}