import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import ClosetItem from "../../components/ClosetItem";
import CustomHeader from "../../components/Header";
import { style } from "./styles";
import { useAuth } from "../../context/authContext_list";
import logo from "../../assets/logo.png";

export default function Closet() {
  const { onOpen, looks } = useAuth();

  return (
    <View style={style.geral}>
      <CustomHeader
        title="Meu Closet"
        number={looks.length.toString()}
        imageSource={logo}
      />

      <ScrollView style={style.scrollContainer}>
        {looks.map((look: { photo: string | null; title: string; description: string; }, index: React.Key | null | undefined) => (
          <ClosetItem
            key={index}
            image={look.photo && typeof look.photo === 'string' ? { uri: look.photo } : require("../../assets/default-image.jpg")}
            title={look.title}
            description={look.description}
            onPress={() => {}}
          />
        ))}
      </ScrollView>

      <TouchableOpacity onPress={onOpen} style={style.floatingButton}>
        <Text style={style.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
