import { StyleSheet } from "react-native";
import { temas } from "../../global/temas";

export const style = StyleSheet.create({
  geral: {
    flex: 1,
    backgroundColor: temas.cores.bgScreen,
  },

  scrollContainer: {
    flex: 1,
    padding: 20,
  },

  itemContainer: {
    backgroundColor: temas.cores.bgCard,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: temas.cores.primaria,
    marginBottom: 5,
  },

  itemDescription: {
    fontSize: 14,
    color: temas.cores.secundaria,
  },

  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: temas.cores.primaria,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  floatingButtonText: {
    fontSize: 28,
    fontWeight: "bold",
    color: temas.cores.bgCard,
  },
  emptyMessage: {
    fontSize: 18,
    color: temas.cores.secundaria,
    textAlign: "center",
    marginTop: 20,
  },
  
});
