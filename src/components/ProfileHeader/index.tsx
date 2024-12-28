import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, StyleSheet, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { renderVaribale } from '../../global/variables';
import { useNavigation, NavigationProp } from "@react-navigation/native";
import profilepic from '../../assets/profilepic.png'; // Pode substituir isso por uma URL de perfil

interface ProfileHeaderProps {
    subtitle: string;
    onPress: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ subtitle, onPress }) => {
    const [name, setName] = useState<string>('Carregando...');
    const [gender, setGender] = useState<string>('Carregando...');
    const [location, setLocation] = useState<string>('Carregando...');
    const [preferences, setPreferences] = useState({
        fashionTarget: "N/A",
        birthDate: "N/A",
        address: "N/A",
    });
    const [loading, setLoading] = useState<boolean>(true);

    const navigation = useNavigation<NavigationProp<any>>();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = await AsyncStorage.getItem("userToken");
                if (!token) throw new Error("Token não encontrado");

                // Buscar dados do usuário
                const response = await fetch(`${renderVaribale}/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Erro ao buscar dados do usuário");
                }

                const userData = await response.json();
                setName(userData.name || "Usuário");
                setGender(userData.gender || "Não Informado");
                setLocation(userData.location || "Localização não informada");

                // Buscar preferências do usuário
                const preferencesResponse = await fetch(`${renderVaribale}/preferences`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
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
                    });
                }

            } catch (error) {
                console.error(error);
                setName("Usuário");
                setGender("Não Informado");
                setLocation("Localização não informada");
                setPreferences({
                    fashionTarget: "N/A",
                    birthDate: "N/A",
                    address: "N/A",
                });
                Alert.alert("Erro", "Não foi possível carregar as informações.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#80004C" />;
    }

    const getGenderEmoji = (gender: string) => {
        switch (gender) {
            case 'Masculino':
                return '👨 Masculino';
            case 'Feminino':
                return '👩 Feminino';
            case 'Não Binário':
                return '🏳️‍🌈 Não Binário';
            case 'Não Quero Informar':
                return '❔ Não Quero Informar';
            default:
                return ''; // Não exibe nenhum emoji caso o gênero não corresponda
        }
    };

    const redirectProfile = () => {
        navigation.navigate("User");
    };

    return (
        <View style={styles.headerContainer}>
            <View style={styles.infoContainer}>
                <Image source={profilepic} style={styles.profileImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
                <TouchableOpacity onPress={redirectProfile} style={styles.arrowContainer}>
                    <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tagsContainer}>
                {gender && (
                    <Tag icon="gender" label={getGenderEmoji(gender)} />
                )}
                {location && (
                    <Tag icon="location" label={preferences.address} />
                )}
                {preferences.fashionTarget && (
                    <Tag icon="fashion" label={`Moda Alvo: ${preferences.fashionTarget}`} />
                )}
                
            </View>
        </View>
    );
};

interface TagProps {
    icon: string;
    label: string;
}

const Tag: React.FC<TagProps> = ({ icon, label }) => (
    <View style={styles.tag}>
        <Text style={styles.icon}>{icon === 'gender' ? '⚧' : icon === 'location' ? '📍' : '🛍️'}</Text>
        <Text style={styles.tagLabel}>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#F9D8E3',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15, // Espaço maior entre as informações e as tags
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    textContainer: {
        flex: 1,
        marginLeft: 15,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#80004C',
    },
    subtitle: {
        fontSize: 14,
        color: '#A05260',
    },
    arrowContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#80004C',
    },
    arrow: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF',
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Faz as tags quebrarem para uma nova linha
        marginTop: 10,
        paddingVertical: 5,  // Espaço vertical para as tags
    },
    tag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#80004C',
        borderRadius: 20,
        padding: 8,
        marginRight: 12,
        marginBottom: 8, // Espaço entre as tags
        minWidth: 90,
        justifyContent: 'center',
    },
    icon: {
        fontSize: 18,
        marginRight: 5,
        color: '#FFFFFF',
    },
    tagLabel: {
        fontSize: 12,
        color: '#FFFFFF',
    },
});

export default ProfileHeader;
