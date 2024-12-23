import React from "react";
import { View, ScrollView } from "react-native";
import { style } from "./styles";
import ListItem from "../../components/listItem";

export default function Ajustes() {
  return (
    <ScrollView style={style.container}>
      <View style={style.content}>

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
    </ScrollView>
  );
}