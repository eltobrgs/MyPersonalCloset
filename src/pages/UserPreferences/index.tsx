import React from "react";
import { Text, View, Alert, ScrollView } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { style } from "./styles";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import Ajustes from "../ajustes";
import { renderVaribale } from "../../global/variables"; // URL base do backend
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserPreferences() {
    const navigation = useNavigation<NavigationProp<any>>();

    const [fashionTarget, setFashionTarget] = React.useState("Moda: N/A ");
    const [birthDate, setBirthDate] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [theme, setTheme] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    async function savePreferences() {
        try {
            setLoading(true);

            const preferences = {
                fashionTarget,
                birthDate,
                address,
                theme,
                gender,
            };

            // Puxando o token do usuário
            const token = await AsyncStorage.getItem('userToken');

            // Enviando as preferências para o backend
            const response = await fetch(`${renderVaribale}/preferences`, {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(preferences),
            });

            if (response.ok) {
                Alert.alert("Sucesso", "Preferências salvas com sucesso!");
                navigation.reset({
                    index: 0,
                    routes: [{ name: "BottonRoutes" }],
                });
            } else {
                throw new Error("Não foi possível salvar as preferências.");
            }
        } catch (error) {
            Alert.alert("Erro", "Não foi possível salvar as preferências. Tente novamente.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={style.boxTop}>
                <Text style={style.text}>Configurar Preferências</Text>
            </View>

            <View style={style.boxMid}>
                {/* Picker para Moda Alvo */}
                <View>
                    <Text style={style.inputLabel}>MODA ALVO</Text>
                    <View style={style.pickerContainer}>
                        <Picker
                            selectedValue={fashionTarget}
                            onValueChange={(itemValue: React.SetStateAction<string>) =>
                                setFashionTarget(itemValue)
                            }
                            style={style.picker}
                        >
                            <Picker.Item label="Moda Feminina" value="Moda Feminina" />
                            <Picker.Item label="Moda Masculina" value="Moda Masculina" />
                            <Picker.Item label="Moda Unissex" value="Moda Unissex" />
                            <Picker.Item label="Moda Infantil" value="Moda Infantil" />
                            <Picker.Item label="Moda Esportiva" value="Moda Esportiva" />
                        </Picker>
                    </View>
                </View>

                {/* Campo de entrada para data de nascimento */}
                <Input
                    value={birthDate}
                    onChangeText={setBirthDate}
                    title="DATA DE NASCIMENTO"
                    placeholder="Ex: DD/MM/AAAA"
                    IconRigth={Feather}
                    iconRightName="calendar"
                />

                {/* Campo de entrada para endereço */}
                <Input
                    value={address}
                    onChangeText={setAddress}
                    title="ENDEREÇO"
                    IconRigth={MaterialIcons}
                    iconRightName="location-on"
                />

                {/* Picker para Gênero */}
                <View>
                    <Text style={style.inputLabel}>GÊNERO</Text>
                    <View style={style.pickerContainer}>
                        <Picker
                            selectedValue={gender}
                            onValueChange={(itemValue: React.SetStateAction<string>) =>
                                setGender(itemValue)
                            }
                            style={style.picker}
                        >
                            <Picker.Item label="Feminino" value="Feminino" />
                            <Picker.Item label="Masculino" value="Masculino" />
                            <Picker.Item label="Não Binário" value="Não Binário" />
                            <Picker.Item label="Não Quero Informar" value="Não Quero Informar" />
                        </Picker>
                    </View>
                </View>
            </View>

            <View style={style.boxBotton}>
                <Button text="SALVAR PREFERÊNCIAS" loading={loading} onPress={savePreferences} />
            </View>
        </ScrollView>
    );
}
