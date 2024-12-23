import { Dimensions, StyleSheet } from "react-native";
import { temas } from "../../global/temas";


export const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFF',
        width: '100%',
    },
    profileImage: {
        marginTop: 40,
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4E2A33',
    },
    subtitle: {
        fontSize: 16,
        color: '#4E2A33',
        marginBottom: 20,
    },
    counterContainer: {
        backgroundColor: '#7A4B57',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width - 200,
        height: 80,
    },
    counterText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 24,
    },
    preferencesContainer: {
        width: '100%',
        marginTop: 50,
    },
    preferencesTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#4E2A33',
        marginBottom: 10,
    },
});
