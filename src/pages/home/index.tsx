import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProfileHeader from '../../components/ProfileHeader';
import TrendingLooks from '../../components/TrendingLooks';

const Home = () => {
    const handleProfilePress = () => {
        console.log('Navigate to profile details');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Cabeçalho */}
            <ProfileHeader
                name="Paloma Sousa"
                subtitle="MEU PERSONAL CLOSET"
                gender="Feminino"
                location="Picos-Pi"
                onPress={handleProfilePress}
            />

            {/* Looks em Alta */}
            <TrendingLooks />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#FFE5EC'
    },
});

export default Home;