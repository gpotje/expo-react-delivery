import React,{useCallback,useEffect,useState} from "react";
import { Box,FlatList,Pressable,Text } from "native-base";
import { Feather } from '@expo/vector-icons'


import Card from "../../componentes/Card";
import api from '../../services/api';
import HeaderHome from "../../componentes/headerHome";


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
    
    <Box flex={1} backgroundColor="#C4C4C4"> 
      <HeaderHome></HeaderHome>
        <FlatList
            data={defaultData}
            renderItem={({item})=> < Card data={item}/>}
            showsVerticalScrollIndicator={false}
          />
    </Box>
  )


}