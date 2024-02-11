import React,{useCallback,useEffect,useState,useContext} from "react";
import { Box,FlatList } from "native-base";
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
    
      <Box flex={1} >
        
        <FlatList
            data={defaultData}
          //  keyExtractor={ (item) => String(item.id) }
            renderItem={({item})=> < CartEndereco data={item}/>}
            showsVerticalScrollIndicator={false}
          />

   
    </Box>
  )


}