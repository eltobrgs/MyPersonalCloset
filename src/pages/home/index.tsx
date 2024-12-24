import React from 'react';
import { ScrollView, StyleSheet, View, Image, FlatList, Text, TouchableOpacity } from 'react-native';
import ProfileHeader from '../../components/ProfileHeader';
import CustomHeader from '../../components/Header';
import { useNavigation, NavigationProp } from "@react-navigation/native";
import profilepic from '../../assets/profilepic.png';
import logo from '../../assets/logo.png';
import { style } from './styles';
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
        <View style={style.container}>
            {/* Custom Header */}
            <CustomHeader title="My Personal Closet" number={''} imageSource={logo} />

            <ScrollView contentContainerStyle={style.content}>
                {/* Profile Header */}
                <ProfileHeader
                    name="Paloma Sousa"
                    subtitle="MEU PERSONAL CLOSET"
                    gender="Feminino"
                    location="Picos-Pi"
                    onPress={handleProfilePress}
                />

                {/* Seção Looks em Alta */}
                <View style={style.boxMid}>
                    <Text style={style.sectionTitle}>Looks em Alta</Text>
                    <FlatList
                        data={images}
                        horizontal
                        renderItem={({ item }) => (
                            <TouchableOpacity style={style.imageContainer}>
                                <Image source={item} style={style.image} />
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                {/* Seção Opções */}
                <View style={style.boxBottom}>
                    <Text style={style.sectionTitle}>Dicas de Looks</Text>
                    <View style={style.optionsGrid}>
                        <TouchableOpacity style={style.boxBottomItem}>
                            <Text style={style.optionText}>Looks</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.boxBottomItem}>
                            <Text style={style.optionText}>Favoritos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.boxBottomItem}>
                            <Text style={style.optionText}>Estilistas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.boxBottomItem}>
                            <Text style={style.optionText}>Configurações</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};



export default Home;
