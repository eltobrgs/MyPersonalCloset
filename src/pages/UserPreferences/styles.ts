import { StyleSheet } from "react-native";
import { temas } from "../../global/temas";

export const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: temas.cores.bgScreen,
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    boxTop: {
        marginBottom: 20,
        alignItems: "center",
    },
    boxMid: {
        width: "100%",
    },
    boxBotton: {
        marginTop: 20,
        width: "100%",
        alignItems: "center",
    },
    text: {
        fontWeight: "bold",
        color: temas.cores.primaria,
        fontSize: 22,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: "bold",
        color: temas.cores.secundaria,
        marginBottom: 5,
    },
    pickerContainer: {
        width: "100%",
        height: 50, // Aumenta a altura para melhor visibilidade
        borderBottomWidth: 1,
        borderColor: temas.cores.lightgray,
        backgroundColor: temas.cores.bgScreen,
        marginTop: 10,
        justifyContent: "center",
        paddingHorizontal: 5, // Adiciona espaçamento interno
    },
    picker: {
        height: "100%",
        fontSize: 17,
        color: temas.cores.primaria,
    },
});
