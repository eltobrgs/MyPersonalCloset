import { StyleSheet } from "react-native";
import { temas } from "../../global/temas";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: temas.cores.bgScreen, // Cor de fundo para a tela
  },
  content: {
    padding: 20,
    flexGrow: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: temas.cores.primaria,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'YourCustomFont', // Fonte personalizada, se necessário
  },
  boxMid: {
    backgroundColor: temas.cores.insideGray, // Cor de fundo para a seção
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    elevation: 5, // Sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  boxBottom: {
    backgroundColor: temas.cores.insideGray, // Cor de fundo para a seção
    padding: 20,
    borderRadius: 15,
    marginTop: 30,
    elevation: 5, // Sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
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
    backgroundColor: temas.cores.lightgray,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3, // Sombra
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
    fontFamily: 'YourCustomFont', // Fonte personalizada, se necessário
  },
});
