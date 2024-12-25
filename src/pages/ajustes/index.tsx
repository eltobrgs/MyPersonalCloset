import React from "react";
import { View, ScrollView, Text, Alert } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native"; // Importando a navegação
import { style } from "./styles";
import ListItem from "../../components/listItem";
import CustomHeader from "../../components/Header"; // Certifique-se de ter o componente CustomHeader
import logo from "../../assets/logo.png"; // Logo a ser usada no cabeçalho
import AsyncStorage from "@react-native-async-storage/async-storage"; // Importação do AsyncStorage

export default function Ajustes() {
  const navigation = useNavigation<NavigationProp<any>>(); // Hook para navegação

  // Função para realizar o logout
  const handleLogout = async () => {
    Alert.alert(
      "Confirmação",
      "Você tem certeza de que deseja sair?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Sair",
          style: "destructive",
          onPress: async () => {
            try {
              console.log("Removendo token...");
              await AsyncStorage.removeItem("userToken");
              console.log("Token removido com sucesso!");

              // Redireciona para a tela de login
              navigation.reset({
                index: 0,
                routes: [{ name: "Login" }],
              });
            } catch (error) {
              console.error("Erro ao realizar logout:", error);
              Alert.alert("Erro", "Não foi possível realizar o logout.");
            }
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={style.container}>
      <CustomHeader title="Ajustes" number={''} imageSource={logo} />

      <View style={style.content}>
        {/* Seção de Lista de Itens */}
        <View style={style.boxMid}>
          <Text style={style.sectionTitle}>Configurações</Text>

          <ListItem
            title="Notificações"
            onPress={() => console.log("Notificações")}
          />
          <ListItem
            title="Configurações da conta"
            onPress={() => console.log("Configurações da conta")}
          />
          <ListItem
            title="Segurança"
            onPress={() => console.log("Segurança")}
          />
          <ListItem
            title="Privacidade"
            onPress={() => console.log("Privacidade")}
          />
          <ListItem
            title="Linguagem"
            onPress={() => console.log("Linguagem")}
          />
          <ListItem
            title="Sobre o Meu personal Closet"
            onPress={() => console.log("Sobre o Meu personal Closet")}
          />
          <ListItem
            title="Termos de serviço"
            onPress={() => console.log("Termos de serviço")}
          />

          {/* Botão de Logout */}
          <ListItem
            title="Sair"
            onPress={handleLogout}
          />
        </View>
      </View>
    </ScrollView>
  );
}
