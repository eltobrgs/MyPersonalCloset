import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PreferenceItem from '../../components/PreferenceItem';
import CustomHeader from '../../components/Header'; 
import profilepic from '../../assets/profilepic.png';
import logo from '../../assets/logo.png';
import { style } from './styles';
import { useAuth } from '../../context/authContext_list';
import { renderVaribale } from '../../global/variables'; // URL base do backend

const UserProfile = () => {
    const [userName, setUserName] = useState("Carregando...");
    const { looks } = useAuth();

    useEffect(() => {
        const fetchUserName = async () => {
            console.log("Iniciando a busca do nome do usuário");
            try {
                const token = await AsyncStorage.getItem('userToken');
                if (!token) {
                    console.error("Token não encontrado no AsyncStorage");
                    setUserName("Usuário");
                    return;
                }

                const response = await fetch(`${renderVaribale}/me`, {
                    method: 'GET',
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("Dados recebidos do backend:", data);
                    setUserName(data.name || "Usuário"); // Define o nome retornado ou "Usuário" como fallback
                } else {
                    console.error("Erro ao buscar nome do usuário:", response.status);
                    setUserName("Usuário");
                }
            } catch (error) {
                console.error("Erro ao conectar ao backend:", error);
                setUserName("Usuário");
            }
        };

        fetchUserName();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF8FB' }}>
            <CustomHeader title="Perfil de Usuário" imageSource={logo} number={''} />

            <ScrollView contentContainerStyle={style.container}>
                <Image
                    source={profilepic}
                    style={style.profileImage}
                />
                <Text style={style.name}>{userName}</Text> {/* Exibe o nome recuperado */}
                <Text style={style.subtitle}>MODA FEMININA</Text>

                <View style={style.counterContainer}>
                    <Text style={style.counterText}>{looks.length.toString()} LOOKS CADASTRADOS</Text>
                </View>

                <View style={style.preferencesContainer}>
                    <Text style={style.preferencesTitle}>PREFERÊNCIAS</Text>
                    <PreferenceItem label="Moda alvo:" value="Moda Feminina" />
                    <PreferenceItem label="Data de nascimento:" value="05/03/2001" icon="calendar" />
                    <PreferenceItem label="Endereço:" value="Parque Industrial, Picos - PI, Brasil" />
                    <PreferenceItem label="Tema:" value="Claro" />
                </View>
            </ScrollView>
        </View>
    );
};

export default UserProfile;
