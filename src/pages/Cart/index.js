import {useContext} from 'react';
import { FlatList, Box,Text  } from "native-base";
import { CartContext } from '../../context/CartContext'
import {CartItem} from '../../componentes/CartItem'


export default function Cart(){

  const {cart, addItemCart,removeItemCart } = useContext(CartContext)

  return (
    <Box flex={1} paddingY={5} paddingX={5} backgroundColor="#C4C4C4" > 
      
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
      )}
     />


    </Box>
  );

}

