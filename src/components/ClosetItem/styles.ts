import { temas } from "../../global/temas";
import { StyleSheet, Dimensions } from "react-native";

export const style = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FCEFF6', // Cor de fundo semelhante ao rosa claro
        borderRadius: 15,
        padding: 15,
        marginBottom: 20,
        elevation: 2,
      },
      imageContainer: {
        marginRight: 15,
      },
      image: {
        width: 70,
        height: 70,
        borderRadius: 35,
      },
      textContainer: {
        flex: 1,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000',
      },
      description: {
        fontSize: 14,
        color: '#555',
      },
      arrow: {
        fontSize: 20,
        color: '#888',
      },
    
});