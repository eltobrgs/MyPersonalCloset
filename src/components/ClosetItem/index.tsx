import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./styles";

interface ClosetItemProps {
  image: any;
  title: string;
  description: string;
  onPress: () => void;
  deleteFunction: any;
}

const ClosetItem: React.FC<ClosetItemProps> = ({ deleteFunction, image, title, description, onPress }) => {
  return (
    <TouchableOpacity style={style.card} onPress={onPress}>
      <View style={style.imageContainer}>
        <Image source={image} style={style.image} />
      </View>
      <View style={style.textContainer}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.description}>{description}</Text>
      </View>
      <Text style={style.arrow}>&gt;</Text>
      <TouchableOpacity style={style.deleteButton} onPress={deleteFunction}>
        <Text style={style.deleteText}>🗑️</Text>
      </TouchableOpacity>

    </TouchableOpacity>
  );
};

export default ClosetItem;
