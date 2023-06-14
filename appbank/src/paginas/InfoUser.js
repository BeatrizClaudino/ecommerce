import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView, Alert } from 'react-native';
import CaixaInput from '../componentes/CaixaInput';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ip = "192.168.0.104:8000";

export default function InfoUser({ navigation }) {
    const [user, setUser] = useState({
        nome: "Carregando...",
        conta: {
            agencia: "Carregando...",
            numero: "Carregando...",
            limite: "Carregando"
        },
        celular: "Carregando...",
        email: "Carregando...",
        data_nascimento: "Carregando...",
        cpf: "Carregando..."
    });
    const [accessToken, setAccessToken] = useState('');
    const [id, setId] = useState(0);
    

    useEffect(() => {
        const getToken = async () => {
            try {
                const token = await AsyncStorage.getItem("token");
                const tokenRefresh = JSON.parse(token).refresh;
                const accessToken = JSON.parse(token).access;

                if (!token) {
                    Alert.alert('Opa, parece que você não está logado!');
                    return navigation.navigate('Login');
                }

                axios.get(`http://${ip}/auth/users/`, {
                    headers: {
                        Authorization: `JWT ${accessToken}`
                    }
                })
                    .then((res) => {
                        const userId = res.data[0].id;
                        setId(userId);

                        axios.get(`http://${ip}/app/conta/${userId}/`, {
                            headers: {
                                Authorization: `JWT ${accessToken}`
                            }
                        })
                            .then((resConta) => {
                                setUser({ ...res.data[0], conta: resConta.data });
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    })
                    .catch((error) => {
                        console.log(error);
                        axios.post(`http://${ip}/auth/jwt/refresh/`, { refresh: tokenRefresh })
                            .then((res) => {
                                const tokenAccess = res.data.access;
                                setAccessToken(tokenAccess);
                                axios.get(`http://${ip}/auth/users/`, {
                                    headers: {
                                        Authorization: `JWT ${tokenAccess}`
                                    }
                                })
                                    .then((res) => {
                                        const userId = res.data[0].id;
                                        setId(userId);
                                        axios.get(`http://${ip}/app/conta/${userId}/`, {
                                            headers: {
                                                Authorization: `JWT ${tokenAccess}`
                                            }
                                        })
                                            .then((resConta) => {
                                                setUser({ ...res.data[0], conta: resConta.data });
                                            })
                                            .catch((error) => {
                                                console.log(error);
                                            });
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    });
            } catch (error) {
                console.log(error);
                // Trate o erro adequadamente
                alert(accessToken)
            }
        };

        getToken();
    }, []);

    const deleteUser = () => {
        axios.delete(`http://${ip}/app/usuario/${id}/`, {
            
          headers: {
            Authorization: `JWT ${accessToken}`
          }
        })
          .then(res => {
            if (res.status === 204) {
              Alert.alert('Sua conta foi deletada com sucesso!');
              AsyncStorage.removeItem('token');
              navigation.navigate("TelaInicial");
            } else {
              Alert.alert('Não foi possível deletar a sua conta :(');
            }
          })
          .catch(error => {
            console.log("AINN", error);
            Alert.alert('Não foi possível deletar a sua conta :(')
            });
    };

    return (
        <ScrollView className="flex-1">

            <View className="w-full h-[20vh] flex items-center justify-center">
                <Image className="w-[25vw] h-[14vh]" source={require('../../assets/User.png')} />
            </View>
            <View>
                <CaixaInput texto="Nome" valor={user.nome} />
                <CaixaInput texto="Data de nascimento" valor={user.data_nascimento} />
                <CaixaInput texto="Telefone" valor={user.celular} />
                <CaixaInput texto="Agência" valor={user.conta.agencia} />
                <CaixaInput texto="Conta" valor={user.conta.numero} />
            </View>
            <View className="w-full h-full flex items-center pb-6 ">
                <View className="w-[90%] h-[7vh] rounded-lg items-center justify-center bg-red-300">
                    <TouchableOpacity onPress={() => deleteUser()}>
                        <View className="flex flex-row space-x-5 items-center">
                            <Image source={require('../../assets/lixeira.png')} />
                            <Text className="text-red-600 text-[18px]">
                                Deletar conta
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}