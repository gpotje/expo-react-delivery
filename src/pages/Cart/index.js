import {useContext} from 'react';
import { FlatList, Box,Text, Button  } from "native-base";
import { CartContext } from '../../context/CartContext'
import CartItem from '../../componentes/CartItem';
import axios from 'axios';



export default function Cart(){

  const {cart, addItemCart,removeItemCart } = useContext(CartContext)

  let axiosConfig = {
    headers: {
        'Authorization': 'Bearer 4901fc0c-0e7d-4bcd-bbff-4cd561ed38b3'
    }
  };


  var postData = {
     "formaPagamento": "DINHEIRO",
      "troco": 33.00,
      "idUsuario":101,
      "valorPedido": "",
      "produtos": [
          {
                  "id": 101,
                  "nome": "HOT DOG DORITOS",
                  "preco": 10.00
              },
              {
                  "id": 102,
                  "nome": "BEIRUTE DE CALABRESA",
                  "preco": 11.00
              },
              {
                  "id": 103,
                  "nome": "X-BACON",
                  "preco": 12.00
              }
      ]
  
  };

   function FinalizarPedido(){
    axios.post(`http://192.168.1.6:8080/api/v1/pedido/create/`, postData, axiosConfig)
    .then((res) => {
      console.log("RESPONSE DATA: ", res.data);
      console.log("RESPONSE STATUS: ", res.status);
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })


  }
  

  return (
    <Box flex={1} paddingY={5} paddingX={5} background="#fafafa" > 
      
    <FlatList
     data={cart}
     showsHorizontalScrollIndicator={false}
     keyExtractor={(item) => String(item.id)}
     renderItem={({item}) => (
       <CartItem  
         data={item}
         addAmount={ () => addItemCart(item)}
         removeAmount={ () => removeItemCart(item)}
       />
       
     )}/>

      <Button backgroundColor="#FC0303"onPress={FinalizarPedido}>Finalizar pedido</Button>

   </Box>
  );

}


