import {useContext,useState,Alert} from 'react';
import { FlatList, Box, Button  } from "native-base";
import { CartContext } from '../../context/CartContext'
import CartItem from '../../componentes/CartItem';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';


export default function Cart(){

  const navigation = useNavigation();

  const {cart, addItemCart,removeItemCart,setCart } = useContext(CartContext)
  const[product,setProduct] = useState([]);

  let somaPedido = 0;

  let axiosConfig = {
    headers: {
        'Authorization': 'Bearer 4c1b9182-43dd-43cf-8b26-09592f94f137'
    }
  };
   function FinalizarPedido(){

    if(cart.length > 0){
          setProduct([]);
        cart.forEach((element) =>{
          console.log("element "+element)
          product.push({
            id:element.id,
            nome: element.nome,
            preco: element.preco,
            quantProdutoCompra: element.amount,
          })
        });
        
        console.log(product)
        var postData = {
          "formaPagamento": "DINHEIRO",
          "troco": 5.00,
          "idUsuario":101,
          "produtos": product
      }
  
    api.post(`/pedido/create/`, postData, axiosConfig)
        .then((res) => {
          console.log("RESPONSE DATA: ", res.data);
          console.log("RESPONSE STATUS: ", res.status);
          alert("Seu pedido foi feito com sucesso")
          setCart([])
          navigation.navigate("Home")
        })
        .catch((error) => {
            if (error.response.status === 401) {
              alert("Sua sessão expirou faça login novamente")
            }
            alert("Error ",error.message)
          })
          
  }else{
          alert("Deve selecionar ao menos um item")
        }
    


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

      <Button backgroundColor="#FC0303"onPress={FinalizarPedido} >Finalizar pedido</Button>

      <Button backgroundColor="#FC0303"onPress={ () => navigation.navigate("Pedidos") }>verificar pedidos</Button>
   </Box>
  );

}


