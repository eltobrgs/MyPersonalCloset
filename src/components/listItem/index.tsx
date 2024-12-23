import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from "react-native";
interface ListItemProps {
  title: string;
  onPress: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={style.item} onPress={onPress}>
      <Text style={style.bullet}>•</Text>
      <Text style={style.title}>{title}</Text>
      <Text style={style.arrow}>&gt;</Text>
    </TouchableOpacity>
  );
};


const style = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D5A0A6', // Cor similar ao da linha
  },
  bullet: {
    fontSize: 16,
    color: '#800020', // Cor semelhante ao vermelho do bullet
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: '#333', // Texto principal
  },
  arrow: {
    fontSize: 20,
    color: '#800020', // Cor semelhante ao vermelho do ícone
  },
});
export default ListItem;
