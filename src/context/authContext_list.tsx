import React, { createContext, useContext, useRef } from "react";
import { Dimensions, Text, View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Modalize } from "react-native-modalize";
import { AntDesign } from "@expo/vector-icons";

export const authContextList = createContext<any>({});

export const AuthProvider_list = (props: any): any => {
  const modalizeRef = useRef<Modalize>(null);

  // Função para abrir o modal
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  // Lista de looks
  const _lookList = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Looks do Dia</Text>

          {/* Botão de Fechar */}
          <View style={{ flexDirection: "row", gap: 10 }}>
            <TouchableOpacity onPress={() => modalizeRef.current?.close()}>
              <AntDesign name="closecircle" style={styles.closeIcon} />
            </TouchableOpacity>

            {/* Botão de Adicionar Look */}
            <TouchableOpacity>
              <AntDesign name="pluscircle" style={styles.addIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Look 1: Casual</Text>
            <Text style={styles.cardDescription}>
              Camiseta branca, jeans azul, e tênis branco. Um visual perfeito para o dia a dia.
            </Text>
            <Text style={styles.cardTime}>Sugestão para: Dia ensolarado</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Look 2: Elegante</Text>
            <Text style={styles.cardDescription}>
              Camisa social azul, calça preta e sapatos sociais. Ideal para reuniões ou eventos formais.
            </Text>
            <Text style={styles.cardTime}>Sugestão para: Eventos formais</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Look 3: Esportivo</Text>
            <Text style={styles.cardDescription}>
              Regata preta, shorts esportivo e tênis de corrida. Perfeito para treinos e atividades físicas.
            </Text>
            <Text style={styles.cardTime}>Sugestão para: Atividades ao ar livre</Text>
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <authContextList.Provider value={{ onOpen }}>
      {props.children}
      <Modalize
        ref={modalizeRef}
        adjustToContentHeight={true}
        disableScrollIfPossible={false}
        onOverlayPress={() => { }}
        closeOnOverlayTap={false}
        panGestureEnabled={false}
      >
        {_lookList()}
      </Modalize>
    </authContextList.Provider>
  );
};

export const useAuth = () => useContext(authContextList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
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
    color: "#333",
  },
  addIcon: {
    fontSize: 28,
    color: "#4CAF50",
  },
  closeIcon: {
    fontSize: 28,
    color: "#F44336", // Vermelho para indicar fechar
  },
  content: {
    flex: 1,
  },
  card: {
    backgroundColor: "#FFF",
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
    color: "#222",
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  cardTime: {
    fontSize: 12,
    color: "#999",
    fontStyle: "italic",
  },
});
