import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface CustomHeaderProps {
    number: string | number;
    title: string;
    imageSource: any; // Aceita imagens locais ou remotas
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ number, title, imageSource }) => {
    return (
        <View style={styles.headerContainer}>
            <Image source={imageSource} style={styles.icon} />
            <View style={styles.textContainer}>
                <Text style={styles.number}>{number}</Text>

            </View>
            <Text style={styles.title}>{title}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#FFF8FB',
        borderBottomWidth: 2,
        borderBottomColor: '#EAD1E9',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 12,
    },
    textContainer: {
        flex: 1,

    },
    number: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#7A4B57',
        marginBottom: 4,
        textAlign: 'center', // Alinha o número no centro
        fontFamily: '', // Adicione sua fonte personalizada
    },
    title: {
        fontSize: 20,
        color: '#7A4B57',
        fontWeight: '500',
        textAlign: 'center', // Alinha o título no centro
        fontFamily: '', // Adicione sua fonte personalizada

    },
});

export default CustomHeader;
