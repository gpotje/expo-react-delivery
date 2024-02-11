import React,{useCallback,useEffect,useState,useContext} from "react";
import { Box,FlatList,Button } from "native-base";
import CartEndereco from "../../componentes/CartEndereco";
import api from '../../services/api';
import { AuthContext } from "../../context/auth"



export default function Endereco() {
  const [defaultData, setDefaultData] = useState({});

  const { navigation,token } = useContext(AuthContext);

  const endereco = useCallback(() => {
    const getEndereco = async () => {
      await api
        .get("/endereco/listByIdUsuario/100",{ headers: {
          'Authorization': `Bearer ${token}`
      }})
        .then((res) => {
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
    getEndereco();
  }, []);

  useEffect(() => {
    endereco();
  }, [endereco]);


  
  return (
    
      <Box flex={1} paddingY={5} paddingX={5} background="#C4C4C4">
        
        <FlatList 
            data={defaultData}
          //  keyExtractor={ (item) => String(item.id) }
            renderItem={({item})=> < CartEndereco data={item}/>}
            showsVerticalScrollIndicator={false}
          />

    <Button backgroundColor="#FC0303" onPress={() => navigation.navigate("CadastraEndereco") } >Novo Endereco </Button>
    </Box>
  )


}