import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PreferenceItem from '../../components/PreferenceItem';
import CustomHeader from '../../components/Header'; 
import { Button } from '../../components/button'; // Import do componente de botão
import profilepic from '../../assets/profilepic.png';
import logo from '../../assets/logo.png';
import { style } from './styles';
import { useAuth } from '../../context/authContext_list';
import { renderVaribale } from '../../global/variables'; // URL base do backend
import { useNavigation, NavigationProp } from '@react-navigation/native'; // Navegação

const UserProfile = () => {
    const [userName, setUserName] = useState("Carregando...");
    const [preferences, setPreferences] = useState({
        fashionTarget: "N/A",
        birthDate: "N/A",
        address: "N/A",
        theme: "N/A",
        gender: "N/A",
    });
    const { looks } = useAuth();
    const navigation = useNavigation<NavigationProp<any>>();

    // Buscar nome do usuário
    useEffect(() => {
        const fetchUserName = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                if (!token) {
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
                    setUserName(data.name || "Usuário");
                } else {
                    setUserName("Usuário");
                }
            } catch (error) {
                setUserName("Usuário");
            }
        };

        fetchUserName();
    }, []);

    // Buscar preferências do AsyncStorage
    useEffect(() => {
        const fetchPreferences = async () => {
            try {
                const savedPreferences = await AsyncStorage.getItem('userPreferences');
                if (savedPreferences) {
                    setPreferences(JSON.parse(savedPreferences));
                }
            } catch (error) {
                console.error("Erro ao buscar preferências:", error);
            }
        };

        fetchPreferences();
    }, []);

    // Navegar para a tela de edição de preferências
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
