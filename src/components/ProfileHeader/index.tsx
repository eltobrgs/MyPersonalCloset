import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import profilepic from '../../assets/profilepic.png';
import { renderVaribale } from '../../global/variables';
import { useNavigation, NavigationProp } from "@react-navigation/native";

interface ProfileHeaderProps {
    subtitle: string;
    gender: string;
    location: string;
    onPress: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ subtitle, gender, location, onPress }) => {
    const [name, setName] = useState<string>('Carregando...');
    const [preferences, setPreferences] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const navigation = useNavigation<NavigationProp<any>>();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = await AsyncStorage.getItem("userToken");
                if (!token) throw new Error("Token não encontrado");

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

                const savedPreferences = await AsyncStorage.getItem('userPreferences');
                if (savedPreferences) {
                    setPreferences(JSON.parse(savedPreferences));
                }

            } catch (error) {
                console.error(error);
                setName("Usuário");
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
                <TouchableOpacity onPress={redirectProfile}>
                    <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tagsContainer}>
                {preferences && preferences.gender && (
                    <Tag icon="gender" label={getGenderEmoji(preferences.gender)} />
                )}
                {preferences && preferences.location && (
                    <Tag icon="location" label={preferences.location} />
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
        <Text style={styles.icon}>{icon === 'gender' ? '' : ''}{icon === 'location' ? '📍' : ''}</Text>
        <Text style={styles.tagLabel}>{label}</Text>
    </View>
);

const styles = StyleSheet.create({
    headerContainer: {
        height: 150,
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
        fontSize: 16,
        color: '#A05260',
    },
    arrow: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#80004C',
    },
    tagsContainer: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
    },
    tag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#80004C',
        borderRadius: 20,
        padding: 8,
        marginRight: 12,
        minWidth: 90,
        justifyContent: 'center',
    },
    icon: {
        fontSize: 18,
        marginRight: 5,
        color: '#FFFFFF',
    },
    tagLabel: {
        fontSize: 14,
        color: '#FFFFFF',
    },
});

export default ProfileHeader;
