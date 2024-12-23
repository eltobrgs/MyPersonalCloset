import React from 'react';
import { ScrollView, StyleSheet, View, Image, FlatList, Text } from 'react-native';
import ProfileHeader from '../../components/ProfileHeader';
import { useNavigation, NavigationProp } from "@react-navigation/native";
import profilepic from '../../assets/profilepic.png';

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
        profilepic
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ProfileHeader
                name="Paloma Sousa"
                subtitle="MEU PERSONAL CLOSET"
                gender="Feminino"
                location="Picos-Pi"
                onPress={handleProfilePress}
            />

            <View style={styles.BoxMid}>
                <Text style={styles.sectionTitle}>Looks em Alta</Text>
                <FlatList
                    data={images}
                    horizontal
                    renderItem={({ item }) => (
                        <View style={styles.imageContainer}>
                            <Image source={item} style={styles.image} />
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={styles.BoxInside}>
                <Text style={styles.sectionTitle}>Opções</Text>
                <View style={styles.optionsGrid}>
                    <View style={styles.BoxInsideItem}></View>
                    <View style={styles.BoxInsideItem}></View>
                    <View style={styles.BoxInsideItem}></View>
                    <View style={styles.BoxInsideItem}></View>
                </View>
            </View>
        </ScrollView>
    );
};

import { temas } from '../../global/temas';
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: temas.cores.bgScreen,
        flexGrow: 1,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#7A4B57',
        marginBottom: 10,
        textAlign: 'center',
    },
    BoxMid: {
        backgroundColor: '#F9D8E3',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        elevation: 5,
    },
    imageContainer: {
        marginRight: 10,
        borderWidth: 2,
        borderColor: '#7A4B57',
        borderRadius: 30,
        overflow: 'hidden',
    },
    image: {
        width: 70,
        height: 70,
    },
    BoxInside: {
        backgroundColor: '#F9D8E3',
        padding: 15,
        borderRadius: 10,
        elevation: 5,
        marginTop: 20,
    },
    optionsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    BoxInsideItem: {
        width: '48%',
        height: 100,
        backgroundColor: '#D9A5B3',
        borderRadius: 10,
        marginBottom: 10,
        elevation: 3,
    },
});

export default Home;
