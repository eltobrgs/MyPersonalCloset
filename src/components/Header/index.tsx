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
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        marginRight: 20,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
    },
    number: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#7A4B57',
        marginBottom: 4,
        textAlign: 'left',
        fontFamily: 'YourCustomFont', // Adicione sua fonte personalizada
    },
    title: {
        fontSize: 20,
        color: '#7A4B57',
        fontWeight: '500',
        textAlign: 'left',
        fontFamily: 'YourCustomFont', // Adicione sua fonte personalizada
    },
});

export default CustomHeader;
