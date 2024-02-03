import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Cart from '../pages/Cart/index';
import Detalhes from '../pages/Detalhes';


const Stack = createNativeStackNavigator();

export default function Routes(){
  return(
      <Stack.Navigator>
          <Stack.Screen
              name="Home"
              component={Home}
              options={{
                  headerShown: false
              }}
          />
          <Stack.Screen
              name="Detalhes"
              component={Detalhes}
              options={{
                  headerTitle: "Detalhes",
               }}
          />
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerTitle: "Meu carinho",
                    headerStyle: { backgroundColor: '#FC0303' }
                }}
            />
      </Stack.Navigator>
  );
}