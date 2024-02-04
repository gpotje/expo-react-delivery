import {useContext,useState} from 'react';
import { FlatList, Box,Text, Button  } from "native-base";
import { CartContext } from '../../context/CartContext'
import CartItem from '../../componentes/CartItem';
import axios from 'axios';
import api from '../../services/api';



export default function Cart(){

  const {cart, addItemCart,removeItemCart,setCart } = useContext(CartContext)
  const[product,setProduct] = useState([]);

  let somaPedido = 0;

  let axiosConfig = {
    headers: {
        'Authorization': 'Bearer 6eba242a-0b41-4e87-bef3-ee5d8080faad'
    }
  };
   function FinalizarPedido(){

    setProduct([]);
    cart.forEach((element) =>{
      console.log("element "+element)
      product.push({
        id:element.id,
        nome: element.nome,
        preco: element.preco,
        quant: element.amount,
      })
    });
    
    console.log(product)
    var postData = {
      "formaPagamento": "DINHEIRO",
      "troco": 5.00,
      "idUsuario":101,
      "produtos": product
  }
  
  // api.post(`/pedido/create/`, postData, axiosConfig)
  //   .then((res) => {
  //     console.log("RESPONSE DATA: ", res.data);
  //     console.log("RESPONSE STATUS: ", res.status);
  //   })
  //   .catch((err) => {
  //     console.log("AXIOS ERROR: ", err);
  //   })


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


