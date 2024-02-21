import React,{useCallback,useEffect,useState,useContext} from "react";
import { Box,FlatList,Text } from "native-base";
import api from '../../services/api';
import CartPedido from "../../componentes/CartPedido";
import { AuthContext } from "../../context/auth";

export default function Pedidos() {
  const [defaultData, setDefaultData] = useState({});
  const { navigation,token,usuarioLogado } = useContext(AuthContext);
 

  const pedidos = useCallback(() => {

    const getPedidos = async () => {
      await api
        .get("/pedido/findPedidoByIdUsuario/"+usuarioLogado.id,{ headers: {
          'Authorization': `Bearer ${token}`
      }})
        .then((res) => {
          console.log("RESPONSE DATA: ", res.data);
          console.log("RESPONSE STATUS: ", res.status);
          setDefaultData(res.data);
         
        })
        .catch((err) => {
          if (err.response.status === 401) {
            alert("Sua sessão expirou faça login novamente")
            navigation.navigate("Login")
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
    
      <Box flex={1} background="#C4C4C4" >
    
        <FlatList
            data={defaultData}
          // keyExtractor={ (item) => String(item.id) }
            renderItem={({item})=> < CartPedido data={item}/>}
            showsVerticalScrollIndicator={false}
          />

   
    </Box>
  )


}

             