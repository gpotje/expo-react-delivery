import React,{createContext,useState} from "react";
import api from "../services/api";
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const navigation = useNavigation();

    const [token,setToken] = useState('')
    const [usuarioLogado,setUsuarioLogado] = useState('')

     function signIn(username, password) {
       console.log("loginFunc")
            api.post(
                "/oauth/token",
                new URLSearchParams({
                username:username,
                password: password,
                grant_type: "password",
                }),
                    {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Authorization": "Basic ZGVsaXZlcnk6MTIz"
                    }
                }
            ) .then((res) => {
                alert("Obg por se autenticar")
                setToken(res.data["access_token"])
                findUsuarioLogado(username)

            })
            .catch((err) => {
                if (err.code === "ERR_NETWORK") {
                alert(
                    "Verifique sua conexão de rede, ou servidor está offline."
                )
                }
                console.log(err);
                console.log(err.code);
                
            });
    }

    async function findUsuarioLogado(username) {
       await api.get("/usuario/listByUserName/"+username ,{ headers: {
            'Authorization': `Bearer ${token}`}})
            .then((res) => {
                setUsuarioLogado(res.data);
                console.log(usuarioLogado.id)
            })
            .catch((err) => {
                console.log("findUsuarioLogado"+err);
            });
    }



    return(
        <AuthContext.Provider
            value={{
                signIn,
                token,
                navigation,
                usuarioLogado
            }}
        >
            {children}
        </AuthContext.Provider>

    );
    
}

export default AuthProvider;