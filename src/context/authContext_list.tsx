import React, { createContext, useContext, useRef, useState } from "react";
import {
  Alert,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker"; // Biblioteca para seleção de imagens
import { Input } from "../components/Input";
import { temas } from "../global/temas";

export const authContextList = createContext<any>({});

export const AuthProvider_list = (props: any): any => {
  const modalizeRef = useRef<Modalize>(null);
  const [looks, setLooks] = useState<any[]>([]);
  const [newLook, setNewLook] = useState({
    title: "",
    description: "",
    photo: null as string | null, // Campo para armazenar a foto
  });

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const addLook = () => {
    if (!newLook.title || !newLook.description) {
      Alert.alert("Erro", "Preencha todos os campos antes de adicionar um look.");
      return;
    }
    setLooks([...looks, newLook]);
    setNewLook({ title: "", description: "", photo: null });
    modalizeRef.current?.close();
  };

  const selectImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Erro", "Permissão para acessar a galeria é necessária!");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (!pickerResult.canceled) {
      setNewLook({ ...newLook, photo: pickerResult.assets[0].uri });
    }
  };

  const _lookList = () => (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Looks do Dia</Text>
        <TouchableOpacity onPress={() => modalizeRef.current?.close()}>
          <AntDesign name="closecircle" style={styles.closeIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Input
          title="Título"
          value={newLook.title}
          onChangeText={(text) => setNewLook({ ...newLook, title: text })}
          IconLeft={AntDesign}
          iconLeftName="edit"
        />
        <Input
          title="Descrição"
          value={newLook.description}
          onChangeText={(text) => setNewLook({ ...newLook, description: text })}
          IconLeft={AntDesign}
          iconLeftName="filetext1"
        />
        {newLook.photo && (
          <Image source={{ uri: newLook.photo }} style={styles.imagePreview} />
        )}
        <TouchableOpacity onPress={selectImage} style={styles.imageButton}>
          <Text style={styles.imageButtonText}>
            {newLook.photo ? "Trocar Foto" : "Adicionar Foto"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={addLook} style={styles.addButton}>
          <Text style={styles.addButtonText}>Adicionar Look</Text>
        </TouchableOpacity>
      </View>

      {/* <ScrollView style={styles.content}>
        {looks.map((look, index) => (
          <View key={index} style={styles.card}>
            {look.photo && <Image source={{ uri: look.photo }} style={styles.cardImage} />}
            <Text style={styles.cardTitle}>{look.title}</Text>
            <Text style={styles.cardDescription}>{look.description}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );

  return (
    <authContextList.Provider value={{ onOpen, looks }}>
      {props.children}
      <Modalize ref={modalizeRef} adjustToContentHeight={true}>
        {_lookList()}
      </Modalize>
    </authContextList.Provider>
  );
};

export const useAuth = () => useContext(authContextList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: temas.cores.bgScreen,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: temas.cores.primaria,
  },
  closeIcon: {
    fontSize: 28,
    color: temas.cores.secundaria,
  },
  inputContainer: {
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: temas.cores.primaria,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  addButtonText: {
    color: temas.cores.bgCard,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
  },
  card: {
    backgroundColor: temas.cores.bgCard,
    padding: 20,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: temas.cores.secundaria,
  },
  cardDescription: {
    fontSize: 14,
    color: temas.cores.gray,
  },
  cardImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  imageButton: {
    backgroundColor: "#A9A9A9",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  imageButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
