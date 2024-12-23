import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2', // Cor de fundo para a tela
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
    fontFamily: 'YourCustomFont', // Fonte personalizada, se necessário
  },
  boxMid: {
    backgroundColor: '#FEE6EF', // Cor de fundo para a seção
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
    backgroundColor: '#FEE6EF', // Cor de fundo para a seção
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
    backgroundColor: '#D999B5',
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
