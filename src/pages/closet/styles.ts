import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  /* Estilo geral para a tela */
  geral: {
    flex: 1,
    backgroundColor: "#F8F8F8", // Fundo neutro claro
  },

  /* Estilos do container de rolagem */
  scrollContainer: {
    flex: 1,
    padding: 20, // Espaçamento interno para o conteúdo
  },

  /* Estilo para cada item do Closet */
  itemContainer: {
    backgroundColor: "#FFFFFF", // Fundo branco
    borderRadius: 10, // Bordas arredondadas
    padding: 15, // Espaçamento interno
    marginBottom: 15, // Espaçamento entre itens
    shadowColor: "#000", // Sombra para destaque
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra em dispositivos Android
  },

  /* Estilo para o título do item */
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 5, // Espaçamento entre título e descrição
  },

  /* Estilo para a descrição do item */
  itemDescription: {
    fontSize: 14,
    color: "#666666",
  },

  /* Botão flutuante para adicionar novos looks */
  floatingButton: {
    position: "absolute",
    bottom: 20, // Distância da parte inferior da tela
    right: 20, // Distância da lateral direita da tela
    width: 60, // Largura do botão
    height: 60, // Altura do botão
    borderRadius: 30, // Botão circular
    backgroundColor: "#E63946", // Cor vermelha para destaque
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Sombra para Android
  },

  /* Estilo do texto do botão flutuante */
  floatingButtonText: {
    fontSize: 28, // Texto grande
    fontWeight: "bold",
    color: "#FFFFFF", // Cor do texto branco
    
  },
});
