import React,{useCallback,useEffect,useState} from "react";
import { Box,FlatList,Text } from "native-base";
import api from '../../services/api';


export default function Pedidos() {
  const [defaultData, setDefaultData] = useState({});

  const axiosConfig = {
    headers: {
        'Authorization': 'Bearer d1743d15-e948-449d-bf0c-d510e0e7f89d'
    }
  };

  const pedidos = useCallback(() => {
    const getPedidos = async () => {
      await api
        .get("/pedido/findPedidoByIdUsuario/101",axiosConfig)
        .then((res) => {
          setDefaultData(res.data);
         
        })
        .catch((err) => {
          console.log(err);
        });
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
            renderItem={({item})=> (
              <Box>
                <Text>{item.status}</Text>
                <Text>{item.valorPedido}</Text>
                
              </Box>
            )
          
          }
            showsVerticalScrollIndicator={false}
          />

   
    </Box>
  )


}

             