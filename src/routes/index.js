import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
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
                  headerTitle: "Meu carinho"
              }}
          />
      </Stack.Navigator>
  );
}