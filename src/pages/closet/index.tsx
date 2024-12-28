import React, { useEffect, useState } from "react";
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

export default function Closet() {
  const [looks, setLooks] = useState<any[]>([]);
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
          setLooks(result);
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
  }, []);

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
        // Mostrar um alerta de sucesso e recarregar os looks
        Alert.alert("Sucesso", "Look excluído com sucesso.");
        setLooks(looks.filter(look => look.id !== lookId));  // Remover o look da lista local
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
          {looks.map((look, index) => (
            <ClosetItem
              key={index}
              title={look.title}
              description={look.description}
              image={look.photo ? { uri: look.photo } : require("../../assets/default-image.jpg")}
              onPress={() => Alert.alert("Item Pressed", look.title)}
              deleteFunction={() => deleteLook(look.id)}  // Chama a função deleteLook com o ID do look
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
