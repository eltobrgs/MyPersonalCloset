import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  geral: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },

  scrollContainer: {
    flex: 1,
    padding: 20,
  },

  itemContainer: {
    backgroundColor: "#FFFFFF",
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
    color: "#333333",
    marginBottom: 5,
  },

  itemDescription: {
    fontSize: 14,
    color: "#666666",
  },

  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E63946",
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
    color: "#FFFFFF",
  },
});
