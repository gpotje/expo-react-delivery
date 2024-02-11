import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Cart from '../pages/Cart/index';
import Detalhes from '../pages/Detalhes';
import Pedidos from '../pages/Pedidos';
import Login from'../pages/Login';
import Cadastro from '../pages/Login/CadastroUsuario';
import Endereco from '../pages/Endereco';
import CadastraEndereco from '../pages/Endereco/CadastraEndereco';
import CadastroUsuario from '../pages/Login/CadastroUsuario';


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
             <Stack.Screen
                name="Pedidos"
                component={Pedidos}
                options={{
                    headerTitle: "Meu Pedidos",
                    headerStyle: { backgroundColor: '#FC0303' }
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerTitle: "Login",
                    headerStyle: { backgroundColor: '#FC0303' }
                }}
                
            />
            <Stack.Screen
                name="CadastroUsuario"
                component={CadastroUsuario}
                options={{
                    headerTitle: "Cadastro",
                    headerStyle: { backgroundColor: '#FC0303' }
                }}
                
            />
            <Stack.Screen
                name="Endereco"
                component={Endereco}
                options={{
                    headerTitle: "Endereco Usuario",
                    headerStyle: { backgroundColor: '#FC0303' }
                }}
                
            />
            <Stack.Screen
                name="CadastraEndereco"
                component={CadastraEndereco}
                options={{
                    headerTitle: "Cadastra Endereco",
                    headerStyle: { backgroundColor: '#FC0303' }
                }}
                
            />
            
      </Stack.Navigator>
  );
}