import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { AntDesign, Entypo, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { temas } from "../../global/temas";
import { authContextList } from "../../context/authContext_list";

interface Props {
  state: any;
  navigation: any;
}

const CustomTabBar: React.FC<Props> = ({ state, navigation }) => {

  const { onOpen } = useContext<any>(authContextList);

  const goTo = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={style.tabArea}>
      {/* Tab de Home */}
      <TouchableOpacity style={style.tabItem} onPress={() => goTo("Home")}>
        <Entypo
          name="home"
          style={{
            opacity: state.index === 0 ? 1 : 0.5,
            color: state.index === 0 ? temas.cores.primaria : "gray",
            fontSize: 32,
          }}
        />
      </TouchableOpacity>

      {/* Tab de Exercícios */}
      <TouchableOpacity style={style.tabItem} onPress={() => goTo("Closet")}>
        <AntDesign
          name="skin"
          style={{
            opacity: state.index === 1 ? 1 : 0.5,
            color: state.index === 1 ? temas.cores.primaria : "gray",
            fontSize: 32,
          }}
        />
      </TouchableOpacity>

      {/* Botão flutuante */}
      <TouchableOpacity style={style.tabItemButton} onPress={() => onOpen && onOpen()}>
          <Entypo name="plus" 
          style={{ fontSize: 50, color: "#fff" }} />
      </TouchableOpacity>

      {/* Tab de Perfil */}
      <TouchableOpacity style={style.tabItem} onPress={() => goTo("User")}>
        <FontAwesome
          name="user"
          style={{
            opacity: state.index === 2 ? 1 : 0.5,
            color: state.index === 2 ? temas.cores.primaria : "gray",
            fontSize: 32,
          }}
        />
      </TouchableOpacity>

      {/* Tab de Ajustes */}
      <TouchableOpacity style={style.tabItem} onPress={() => goTo("Ajustes")}>
        <AntDesign
          name="setting"
          style={{
            opacity: state.index === 3 ? 1 : 0.5,
            color: state.index === 3 ? temas.cores.primaria : "gray",
            fontSize: 32,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomTabBar;
