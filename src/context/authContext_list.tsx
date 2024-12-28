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

//   const addLook = async () => {
//     if (!newLook.title || !newLook.description) {
//       Alert.alert("Erro", "Preencha todos os campos antes de adicionar um look.");
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
//         body: JSON.stringify({
//           title: newLook.title,
//           description: newLook.description,
//         }),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         setLooks([...looks, result]); // Atualiza a lista local
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

//     const selectImage = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (!permissionResult.granted) {
//       Alert.alert("Erro", "Permissão para acessar a galeria é necessária!");
//       return;
//     }
//     const pickerResult = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//     });
//     if (!pickerResult.canceled) {
//       setNewLook({ ...newLook, photo: pickerResult.assets[0].uri });
//     }
//   };
//   const _lookList = () => (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Looks do Dia</Text>
//         <TouchableOpacity onPress={() => modalizeRef.current?.close()}>
//           <AntDesign name="closecircle" style={styles.closeIcon} />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.inputContainer}>
//         <Input
//           title="Título"
//           value={newLook.title}
//           onChangeText={(text) => setNewLook({ ...newLook, title: text })}
//           IconLeft={AntDesign}
//           iconLeftName="edit"
//         />
//         <Input
//           title="Descrição"
//           value={newLook.description}
//           onChangeText={(text) => setNewLook({ ...newLook, description: text })}
//           IconLeft={AntDesign}
//           iconLeftName="filetext1"
//         />

//         {newLook.photo && (
//           <Image source={{ uri: newLook.photo }} style={styles.imagePreview} />
//         )}
//         <TouchableOpacity onPress={selectImage} style={styles.imageButton}>
//           <Text style={styles.addButtonText}>
//             {newLook.photo ? "Trocar Foto" : "Adicionar Foto"}
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={addLook} style={styles.addButton}>
//           <Text style={styles.addButtonText}>Adicionar Look</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <authContextList.Provider value={{ onOpen, looks }}>
//       {props.children}
//       <Modalize ref={modalizeRef} adjustToContentHeight={true}>
//         {_lookList()}
//       </Modalize>
//     </authContextList.Provider>
//   );
// };

// export const useAuth = () => useContext(authContextList);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: temas.cores.bgScreen,
//     padding: 20,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: temas.cores.primaria,
//   },
//   closeIcon: {
//     fontSize: 28,
//     color: temas.cores.secundaria,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   addButton: {
//     backgroundColor: temas.cores.primaria,
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   addButtonText: {
//     color: temas.cores.bgCard,
//     fontWeight: "bold",
//   },
//   imagePreview: {
//     width: "100%",
//     height: 200,
//     marginBottom: 10,
//     borderRadius: 8,
//   },
//   imageButton: {
//     backgroundColor: "#A9A9A9",
//     padding: 10,
//     borderRadius: 5,
//     alignItems: "center",
//   },
// });


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
        body: JSON.stringify(newLook), // Enviando todos os campos diretamente
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
      base64: true, // Retorna imagem em base64
    });
    if (!pickerResult.canceled) {
      setNewLook({ ...newLook, photo: `data:image/jpeg;base64,${pickerResult.assets[0].base64}` });
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
          <Text style={styles.addButtonText}>
            {newLook.photo ? "Trocar Foto" : "Adicionar Foto"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={addLook} style={styles.addButton}>
          <Text style={styles.addButtonText}>Adicionar Look</Text>
        </TouchableOpacity>
      </View>
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
});
