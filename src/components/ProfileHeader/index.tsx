import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import profilepic from '../../assets/profilepic.png';
import { useNavigation, NavigationProp } from "@react-navigation/native";

interface ProfileHeaderProps {
    subtitle: string;
    gender: string;
    location: string;
    onPress: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ subtitle, gender, location, onPress }) => {
    const [name, setName] = useState<string>("Carregando...");
    const navigation = useNavigation<NavigationProp<any>>();

    useEffect(() => {
        const fetchName = async () => {
            const storedName = await AsyncStorage.getItem("@user_name");
            setName(storedName || "Usuário");
        };
        fetchName();
    }, []);

    async function redirectProfile() {
        navigation.navigate("User");
    }
    return (
        <View style={style.headerContainer}>
            {/* Imagem e Nome */}
            <View style={style.infoContainer}>
                <Image
                    source={profilepic}
                    style={style.profileImage}
                />
                <View style={style.textContainer}>
                    <Text style={style.name}>{name}</Text> {/* Nome obtido do AsyncStorage */}
                    <Text style={style.subtitle}>{subtitle}</Text>
                </View>
                <TouchableOpacity onPress={onPress}>
                    <Text onPress={redirectProfile} style={style.arrow}>&gt;</Text>
                </TouchableOpacity>
            </View>

            {/* Tags */}
            <View style={style.tagsContainer}>
                <Tag icon="gender" label={gender} />
                <Tag icon="location" label={location} />
            </View>
        </View>
    );
};

interface TagProps {
    icon: string;
    label: string;
}

const Tag: React.FC<TagProps> = ({ icon, label }) => (
    <View style={style.tag}>
        <Text style={style.icon}>{icon === 'gender' ? '👩‍🦰' : '📍'}</Text>
        <Text style={style.tagLabel}>{label}</Text>
    </View>
);

const style = StyleSheet.create({
    headerContainer: {
        height: 130,
        backgroundColor: '#F9D8E3',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 50,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#80004C',
    },
    subtitle: {
        fontSize: 14,
        color: '#A05260',
    },
    arrow: {
        fontSize: 18,
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
        borderRadius: 15,
        padding: 5,
        marginRight: 10,
    },
    icon: {
        fontSize: 16,
        marginRight: 5,
        color: '#FFFFFF',
    },
    tagLabel: {
        fontSize: 14,
        color: '#FFFFFF',
    },
});

export default ProfileHeader;
