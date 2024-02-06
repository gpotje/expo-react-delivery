import {useContext,useState,Alert} from 'react';
import { FlatList, Box, Button  } from "native-base";
import { CartContext } from '../../context/CartContext'
import CartItem from '../../componentes/CartItem';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from "../../context/auth"


export default function Cart(){
  const { signIn,token } = useContext(AuthContext);
  const navigation = useNavigation();

  const {cart, addItemCart,removeItemCart,setCart } = useContext(CartContext)
  const[product,setProduct] = useState([]);

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
  
    api.post(`/pedido/create/`, postData, { headers: {
      'Authorization': `Bearer ${token}`
      }})
      .then((res) => {
          console.log("RESPONSE DATA: ", res.data);
          console.log("RESPONSE STATUS: ", res.status);
          alert("Seu pedido foi feito com sucesso")
          setCart([])
          navigation.navigate("Home")
        })
        .catch((error) => {
            if (error.response.status === 401) {
             navigation.navigate("Login")
              alert("Sua sessão expirou faça login novamente")
             return
            }
            alert("Error ",error.message)
          })
          
  }else{
          alert("Deve selecionar ao menos um item")
        }
    


  }
  

  return (
    <Box flex={1} paddingY={5} paddingX={5} background="#C4C4C4" > 
      
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

      <Box flexDirection='row'  justifyContent='space-between'>
        <Button backgroundColor="#FC0303"onPress={FinalizarPedido} w={'40%'} >Finalizar pedido</Button>
        <Button backgroundColor="#FC0303"onPress={ () => navigation.navigate("Pedidos") }  w={'40%'}>Verificar pedidos</Button>
      </Box>

   </Box>
  );

}


