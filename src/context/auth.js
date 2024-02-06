import React,{createContext,useState} from "react";
import api from "../services/api";


export const AuthContext = createContext({});

function AuthProvider({ children }){

    const [token,setToken] = useState('')

     function signIn(username, password) {
        console.log("loginFunc")
            api.post(
                "/oauth/token",
                new URLSearchParams({
                username: username,
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
                console.log("token ",token)
            })
            .catch((err) => {
                if (err.code === "ERR_NETWORK") {
                alert(
                    "Verifique sua conexão de rede, ou servidor está offline."
                )
                }
                console.log(err.code);
                
            });
    }

    return(
        <AuthContext.Provider
            value={{
                signIn,
                token
            }}
        >
            {children}
        </AuthContext.Provider>

    );
    
}

export default AuthProvider;