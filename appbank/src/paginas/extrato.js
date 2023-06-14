import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const ip = "192.168.0.104:8000"

export default function Extrato({navigation}) {
    const [extrato, setExtrato] = useState([])
    

    useEffect(() => {
        const testar = async () => {
          console.log("entrei")
          try {
            const token = await AsyncStorage.getItem("token");
            const tokenRefresh = JSON.parse(token).refresh
            axios.post(`http://${ip}/auth/jwt/refresh`, { refresh: tokenRefresh }) // DAR O REFRESH
              .then((res) => {
                const tokenAccess = res.data.access
                console.log(tokenAccess)
                const testeToken = {
                  headers: {
                    Authorization: `JWT ${tokenAccess}`
                  },
                }
                .then(res =>{
                   axios.get(`http://${ip}/app/movimentacao/${userId}`, testeToken)
                   console.log("eitaaaa", res.data)
                   setExtrato(res.data)
                   alert(extrato)
                })
              }
              ).catch((erro) => {
                console.log('entrou4');
                console.log('errooioioioio', erro)
              })
          }
          catch {
            console.log('se ferrou otário')
          }
        }
        testar();
      }, [])


      
    return(
        <View>
            <Text>Extrato</Text>
            <Text>Suas movimentações foram carregadas</Text>
            <View>
                {extrato.map((item) =>
                    <>
                    {alert.log(item)}
                    <View>
                      <Text>
                        {/* {item.} */}
                      </Text>
                    </View>
                    </>
                )}
            </View>
        </View>
    )
}