import React from "react";
import { View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importando a navegação
import { style } from "./styles";
import ListItem from "../../components/listItem";
import CustomHeader from "../../components/Header"; // Certifique-se de ter o componente CustomHeader
import logo from "../../assets/logo.png"; // Logo a ser usada no cabeçalho

export default function Ajustes() {
  const navigation = useNavigation(); // Hook para navegação

  return (
    <ScrollView style={style.container}>
      <CustomHeader title="Ajustes" number={''} imageSource={logo} />

      <View style={style.content}>
        {/* Custom Header */}

        {/* Seção de Lista de Itens */}
        <View style={style.boxMid}>
          <Text style={style.sectionTitle}>Configurações</Text>

          <ListItem
            title="Notificações"
            onPress={() => console.log('Notificações')}
          />
          <ListItem
            title="Configurações da conta"
            onPress={() => console.log('Configurações da conta')}
          />
          <ListItem
            title="Segurança"
            onPress={() => console.log('Segurança')}
          />
          <ListItem
            title="Privacidade"
            onPress={() => console.log('Privacidade')}
          />
          <ListItem
            title="Linguagem"
            onPress={() => console.log('Linguagem')}
          />
          <ListItem
            title="Sobre o Meu personal Closet"
            onPress={() => console.log('Sobre o Meu personal Closet')}
          />
          <ListItem
            title="Termos de serviço"
            onPress={() => console.log('Termos de serviço')}
          />
        </View>
      </View>
    </ScrollView>
  );
}
