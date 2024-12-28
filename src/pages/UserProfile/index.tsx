import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PreferenceItem from '../../components/PreferenceItem';
import CustomHeader from '../../components/Header';
import { Button } from '../../components/button'; 
import profilepic from '../../assets/profilepic.png';
import logo from '../../assets/logo.png';
import { style } from './styles';
import { renderVaribale } from '../../global/variables'; // URL base do backend
import { useNavigation, NavigationProp } from '@react-navigation/native';

const UserProfile = () => {
    const [looks, setLooks] = useState<any[]>([]);
    const [userName, setUserName] = useState("Carregando...");
    const [preferences, setPreferences] = useState({
        fashionTarget: "N/A",
        birthDate: "N/A",
        address: "N/A",
        theme: "N/A",
        gender: "N/A",
    });
    const navigation = useNavigation<NavigationProp<any>>();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                if (!token) {
                    setUserName("Usuário");
                    return;
                }

                // Buscar nome do usuário
                const response = await fetch(`${renderVaribale}/me`, {
                    method: 'GET',
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserName(data.name || "Usuário");
                } else {
                    setUserName("Usuário");
                }

                // Buscar preferências do usuário
                const preferencesResponse = await fetch(`${renderVaribale}/preferences`, {
                    method: 'GET',
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (preferencesResponse.ok) {
                    const preferencesData = await preferencesResponse.json();
                    setPreferences(preferencesData);
                } else {
                    setPreferences({
                        fashionTarget: "N/A",
                        birthDate: "N/A",
                        address: "N/A",
                        theme: "N/A",
                        gender: "N/A",
                    });
                }

                // Buscar looks do usuário
                const looksResponse = await fetch(`${renderVaribale}/looks`, {
                    method: 'GET',
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (looksResponse.ok) {
                    const looksData = await looksResponse.json();
                    setLooks(looksData);
                } else {
                    setLooks([]);
                }
            } catch (error) {
                console.error("Erro ao buscar dados do usuário:", error);
                Alert.alert("Erro", "Não foi possível carregar as informações.");
                setUserName("Usuário");
                setPreferences({
                    fashionTarget: "N/A",
                    birthDate: "N/A",
                    address: "N/A",
                    theme: "N/A",
                    gender: "N/A",
                });
            }
        };

        fetchUserData();
    }, []);

    const handleEditPreferences = () => {
        navigation.navigate('UserPreferences');
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF8FB' }}>
            <CustomHeader title="Perfil de Usuário" imageSource={logo} number={''} />

            <ScrollView contentContainerStyle={style.container}>
                <Image
                    source={profilepic}
                    style={style.profileImage}
                />
                <Text style={style.name}>{userName}</Text>
                <Text style={style.subtitle}>{preferences.fashionTarget}</Text>

                <View style={style.counterContainer}>
                    <Text style={style.counterText}>{looks.length.toString()} LOOKS CADASTRADOS</Text>
                </View>

                <View style={style.preferencesContainer}>
                    <Text style={style.preferencesTitle}>PREFERÊNCIAS</Text>
                    <PreferenceItem label="Moda alvo:" value={preferences.fashionTarget} />
                    <PreferenceItem label="Data de nascimento:" value={preferences.birthDate} icon="calendar" />
                    <PreferenceItem label="Endereço:" value={preferences.address} />
                    <PreferenceItem label="Gênero:" value={preferences.gender} icon="user" />
                </View>

                {/* Botão para editar preferências */}
                <View style={style.buttonContainer}>
                    <Button 
                        text="EDITAR PREFERÊNCIAS" 
                        onPress={handleEditPreferences} 
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default UserProfile;
