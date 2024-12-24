import { Dimensions, StyleSheet } from "react-native";
import { temas } from "../../global/temas";

export const style = StyleSheet.create({

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