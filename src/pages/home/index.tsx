import React from 'react';
import { ScrollView, StyleSheet, View, Image, FlatList, Text, TouchableOpacity } from 'react-native';
import ProfileHeader from '../../components/ProfileHeader';
import CustomHeader from '../../components/Header';
import { useNavigation, NavigationProp } from "@react-navigation/native";
import profilepic from '../../assets/profilepic.png';
import logo from '../../assets/logo.png';
const Home = () => {
    const handleProfilePress = () => {
        const navigation = useNavigation<NavigationProp<any>>();
        navigation.navigate("User");
    };

    const images = [
        profilepic,
        profilepic,
        profilepic,
        profilepic,
        profilepic,
        profilepic,
        profilepic,
        profilepic,
        profilepic,
        profilepic,
        profilepic,
        profilepic,
        profilepic,
        profilepic,
        profilepic,
        profilepic,
    ];

    return (
        <View style={styles.container}>
            {/* Custom Header */}
            <CustomHeader title="My Personal Closet" number={''} imageSource={logo} />

            <ScrollView contentContainerStyle={styles.content}>
                {/* Profile Header */}
                <ProfileHeader
                    name="Paloma Sousa"
                    subtitle="MEU PERSONAL CLOSET"
                    gender="Feminino"
                    location="Picos-Pi"
                    onPress={handleProfilePress}
                />

                {/* Seção Looks em Alta */}
                <View style={styles.boxMid}>
                    <Text style={styles.sectionTitle}>Looks em Alta</Text>
                    <FlatList
                        data={images}
                        horizontal
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.imageContainer}>
                                <Image source={item} style={styles.image} />
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                {/* Seção Opções */}
                <View style={styles.boxBottom}>
                    <Text style={styles.sectionTitle}>Explore Mais</Text>
                    <View style={styles.optionsGrid}>
                        <TouchableOpacity style={styles.boxBottomItem}>
                            <Text style={styles.optionText}>Looks</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boxBottomItem}>
                            <Text style={styles.optionText}>Favoritos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boxBottomItem}>
                            <Text style={styles.optionText}>Estilistas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boxBottomItem}>
                            <Text style={styles.optionText}>Configurações</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

import { temas } from '../../global/temas';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: temas.cores.bgScreen,
    },
    content: {
        padding: 20,
        flexGrow: 1,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5A2B44',
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: 'YourCustomFont', // Adicione sua fonte personalizada
    },
    boxMid: {
        backgroundColor: '#FEE6EF',
        padding: 20,
        borderRadius: 15,
        marginTop: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    imageContainer: {
        marginRight: 10,
        borderWidth: 2,
        borderColor: '#D999B5',
        borderRadius: 50,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
    },
    image: {
        width: 70,
        height: 70,
    },
    boxBottom: {
        backgroundColor: '#FEE6EF',
        padding: 20,
        borderRadius: 15,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        marginTop: 30,
    },
    optionsGrid: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    boxBottomItem: {
        width: '48%',
        height: 120,
        backgroundColor: '#D999B5',
        borderRadius: 10,
        marginBottom: 15,
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
    },
    optionText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'YourCustomFont', // Adicione sua fonte personalizada
    },
});

export default Home;
