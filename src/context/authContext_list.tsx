// import React, { createContext, useContext, useRef, useState } from "react";
// import {
//   Alert,
//   Text,
//   View,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
// } from "react-native";
// import { Modalize } from "react-native-modalize";
// import { AntDesign } from "@expo/vector-icons";
// import { Input } from "../components/Input";
// import { temas } from "../global/temas";
// import { renderVaribale } from "../global/variables";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as ImagePicker from "expo-image-picker";
// import * as ImageManipulator from "expo-image-manipulator"; // Importando o ImageManipulator

// export const authContextList = createContext<any>({});

// export const AuthProvider_list = (props: any): any => {
//   const modalizeRef = useRef<Modalize>(null);
//   const [looks, setLooks] = useState<any[]>([]);
//   const [newLook, setNewLook] = useState({
//     title: "",
//     description: "",
//     photo: null as string | null,
//   });

//   const onOpen = () => {
//     modalizeRef.current?.open();
//   };

//   // Função para comprimir a imagem antes de enviar
//   const compressImage = async (uri: string) => {
//     const manipulatedImage = await ImageManipulator.manipulateAsync(
//       uri,
//       [{ resize: { width: 800 } }],
//       { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
//     );
//     return manipulatedImage.uri;
//   };

//   const addLook = async () => {
//     if (!newLook.title || !newLook.description || !newLook.photo) {
//       Alert.alert("Erro", "Preencha todos os campos e adicione uma imagem antes de adicionar um look.");
//       return;
//     }

//     try {
//       const token = await AsyncStorage.getItem("userToken");

//       const response = await fetch(`${renderVaribale}/looks`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(newLook),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         setLooks([...looks, result.look]); // Atualiza a lista local
//         setNewLook({ title: "", description: "", photo: null }); // Limpa os campos do formulário
//         modalizeRef.current?.close();
//         Alert.alert("Sucesso", "Look cadastrado com sucesso!");
//       } else {
//         const error = await response.json();
//         Alert.alert("Erro", error.message || "Erro ao cadastrar o look.");
//       }
//     } catch (error) {
//       Alert.alert("Erro", "Não foi possível conectar ao servidor.");
//     }
//   };

//   const selectImage = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (!permissionResult.granted) {
//       Alert.alert("Erro", "Permissão para acessar a galeria é necessária!");
//       return;
//     }
//     const pickerResult = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       base64: true,
//     });
//     if (!pickerResult.canceled) {
//       const compressedUri = await compressImage(pickerResult.assets[0].uri);
//       setNewLook({ ...newLook, photo: compressedUri });
//     }
//   };

//   return (
//     <authContextList.Provider value={{ onOpen, looks }}>
//       {props.children}
//       <Modalize ref={modalizeRef} adjustToContentHeight={true}>
//         <View style={styles.container}>
//           <Text style={styles.title}>Adicionar Look</Text>
//           <Input
//             title="Título"
//             value={newLook.title}
//             onChangeText={(text) => setNewLook({ ...newLook, title: text })}
//             IconLeft={AntDesign}
//             iconLeftName="edit"
//           />
//           <Input
//             title="Descrição"
//             value={newLook.description}
//             onChangeText={(text) => setNewLook({ ...newLook, description: text })}
//             IconLeft={AntDesign}
//             iconLeftName="filetext1"
//           />
//           {newLook.photo && (
//             <Image source={{ uri: newLook.photo }} style={styles.imagePreview} />
//           )}
//           <TouchableOpacity onPress={selectImage} style={styles.imageButton}>
//             <Text style={styles.addButtonText}>
//               {newLook.photo ? "Trocar Foto" : "Adicionar Foto"}
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={addLook} style={styles.addButton}>
//             <Text style={styles.addButtonText}>Adicionar Look</Text>
//           </TouchableOpacity>
//         </View>
//       </Modalize>
//     </authContextList.Provider>
//   );
// };




import React, { createContext, useContext, useRef, useState } from "react";
import {
  Alert,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { AntDesign } from "@expo/vector-icons";
import { Input } from "../components/Input";
import { temas } from "../global/temas";
import { renderVaribale } from "../global/variables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";

export const authContextList = createContext<any>({});

export const AuthProvider_list = (props: any): any => {
  const modalizeRef = useRef<Modalize>(null);
  const [looks, setLooks] = useState<any[]>([]);
  const [newLook, setNewLook] = useState({
    title: "",
    description: "",
    photo: null as string | null,
  });

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  // Função para comprimir a imagem antes de enviar
  const compressImage = async (uri: string) => {
    const manipulatedImage = await ImageManipulator.manipulateAsync(
      uri,
      [{ resize: { width: 800 } }],
      { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
    );
    return manipulatedImage.uri;
  };

  const addLook = async () => {
    if (!newLook.title || !newLook.description || !newLook.photo) {
      Alert.alert("Erro", "Preencha todos os campos e adicione uma imagem antes de adicionar um look.");
      return;
    }

    try {
      const token = await AsyncStorage.getItem("userToken");

      const response = await fetch(`${renderVaribale}/looks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newLook),
      });

      if (response.ok) {
        const result = await response.json();
        setLooks([...looks, result.look]); // Atualiza a lista local
        setNewLook({ title: "", description: "", photo: null }); // Limpa os campos do formulário
        modalizeRef.current?.close();
        Alert.alert("Sucesso", "Look cadastrado com sucesso!");
      } else {
        const error = await response.json();
        Alert.alert("Erro", error.message || "Erro ao cadastrar o look.");
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível conectar ao servidor.");
    }
  };

  const selectImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Erro", "Permissão para acessar a galeria é necessária!");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
    });
    if (!pickerResult.canceled) {
      const compressedUri = await compressImage(pickerResult.assets[0].uri);
      setNewLook({ ...newLook, photo: compressedUri });
    }
  };

  return (
    <authContextList.Provider value={{ onOpen, looks, setLooks }}>
      {props.children}
      <Modalize ref={modalizeRef} adjustToContentHeight={true}>
        <View style={styles.container}>
          <Text style={styles.title}>Adicionar Look</Text>
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
            <Text style={styles.addButtonText}>
              {newLook.photo ? "Trocar Foto" : "Adicionar Foto"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={addLook} style={styles.addButton}>
            <Text style={styles.addButtonText}>Adicionar Look</Text>
          </TouchableOpacity>
        </View>
      </Modalize>
    </authContextList.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: temas.cores.bgScreen,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: temas.cores.primaria,
    marginBottom: 12,
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginBottom: 12,
    alignSelf: "center",
  },
  imageButton: {
    marginTop: 12,
    padding: 10,
    backgroundColor: temas.cores.bgCard,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: "center",
  },
  addButton: {
    padding: 12,
    backgroundColor: temas.cores.primaria,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: temas.cores.secundaria,
    fontWeight: "bold",
  },
});

