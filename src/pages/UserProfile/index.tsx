import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PreferenceItem from '../../components/PreferenceItem';
import CustomHeader from '../../components/Header'; 
import profilepic from '../../assets/profilepic.png';
import logo from '../../assets/logo.png';
import { style } from './styles';
import { useAuth } from '../../context/authContext_list';

const UserProfile = () => {
    const [userName, setUserName] = useState("Carregando...");
    const { looks } = useAuth();

    useEffect(() => {
        const fetchUserName = async () => {
            const storedName = await AsyncStorage.getItem("@user_name");
            setUserName(storedName || "Usuário");
        };
        fetchUserName();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF8FB' }}>
            <CustomHeader title="Perfil de Usuário" number="" imageSource={logo} />

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
