import { Dimensions, StyleSheet } from "react-native";
import { temas } from "../../global/temas";

export const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: temas.cores.bgCard,
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
        color: temas.cores.primaria,
    },
    subtitle: {
        fontSize: 16,
        color: temas.cores.primaria,
        marginBottom: 20,
    },
    counterContainer: {
        backgroundColor: temas.cores.secundaria,
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
        color: temas.cores.bgCard,
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
        color: temas.cores.primaria,
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
});
