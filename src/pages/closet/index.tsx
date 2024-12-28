import React, { useEffect, useState, useContext } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomHeader from "../../components/Header";
import ClosetItem from "../../components/ClosetItem";
import { renderVaribale } from "../../global/variables";
import logo from "../../assets/logo.png";
import { AuthProvider_list, authContextList } from "../../context/authContext_list";

export default function Closet() {
  const { looks, setLooks } = useContext(authContextList); // Usando o contexto para acessar os looks
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLooks = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");

        const response = await fetch(`${renderVaribale}/looks`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();
        if (response.status === 200) {
          setLooks(result);  // Atualiza os looks através do contexto
        } else {
          Alert.alert("Erro", result.error || "Erro ao listar looks.");
        }
      } catch (error) {
        Alert.alert("Erro", "Não foi possível conectar ao servidor.");
      } finally {
        setLoading(false);
      }
    };

    fetchLooks();
  }, [setLooks]);

  const deleteLook = async (lookId: number) => {
    try {
      const token = await AsyncStorage.getItem("userToken");

      const response = await fetch(`${renderVaribale}/looks/${lookId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      if (response.status === 200) {
        Alert.alert("Sucesso", "Look excluído com sucesso.");
        setLooks(looks.filter((look: { id: number; }) => look.id !== lookId));  // Atualiza a lista de looks
      } else {
        Alert.alert("Erro", result.error || "Erro ao excluir look.");
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível conectar ao servidor.");
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        title="Meu Closet"
        number={looks.length.toString()}
        imageSource={logo}
      />

      {loading ? (
        <Text style={styles.loadingText}>Carregando...</Text>
      ) : (
        <ScrollView style={styles.scrollContainer}>
          {looks.map((look: { title: string | undefined; description: string; photo: any; id: number; }, index: React.Key | null | undefined) => (
            <ClosetItem
              key={index}
              title={look.title || "Untitled"}
              description={look.description}
              image={look.photo ? { uri: look.photo } : require("../../assets/default-image.jpg")}
              onPress={() => Alert.alert("Item Pressed", look.title)}
              deleteFunction={() => deleteLook(look.id)}
            />
          ))}
        </ScrollView>
      )}

      <TouchableOpacity onPress={() => {}} style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  loadingText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#666",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#6200EE",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  floatingButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
