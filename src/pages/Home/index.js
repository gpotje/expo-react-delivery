import React,{useCallback,useEffect,useState} from "react";
import { Box,FlatList } from "native-base";

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
    
      <Box flex={1} backgroundColor="#DBD6D6">
        
        <FlatList
            data={defaultData}
            renderItem={({item})=> < Card data={item}/>}
            showsVerticalScrollIndicator={false}
          />

   
    </Box>
  )


}