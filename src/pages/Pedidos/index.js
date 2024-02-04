import React,{useCallback,useEffect,useState} from "react";
import { Box,FlatList,Text } from "native-base";
import api from '../../services/api';
import CartPedido from "../../componentes/CartPedido";

export default function Pedidos() {
  const [defaultData, setDefaultData] = useState({});

  const axiosConfig = {
    headers: {
        'Authorization': 'Bearer 4c1b9182-43dd-43cf-8b26-09592f94f137'
    }
  };

  const pedidos = useCallback(() => {
    const getPedidos = async () => {
      await api
        .get("/pedido/findPedidoByIdUsuario/101",axiosConfig)
        .then((res) => {
          console.log("RESPONSE DATA: ", res.data);
          console.log("RESPONSE STATUS: ", res.status);
          setDefaultData(res.data);
         
        })
        .catch((err) => {
          if (err.response.status === 401) {
            alert("Sua sessão expirou faça login novamente")
            return;
          }
          alert("Error ",err.message)
        })
    };
    getPedidos();
  }, []);

  useEffect(() => {
    pedidos();
  }, [pedidos]);
  
  return (
    
      <Box flex={1} >
        
        <FlatList
            data={defaultData}
          // keyExtractor={ (item) => String(item.id) }
            renderItem={({item})=> < CartPedido data={item}/>}
            showsVerticalScrollIndicator={false}
          />

   
    </Box>
  )


}

             