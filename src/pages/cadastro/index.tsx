import React from "react";
import { Text, View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { style } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { temas } from "../../global/temas";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { renderVaribale } from "../../global/variables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Cadastro() {
    const navigation = useNavigation<NavigationProp<any>>();
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    async function registerUser() {
        try {
            setLoading(true);

            const response = await fetch(`${renderVaribale}/cadastro`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                }),
            });

            const result = await response.json();

            if (response.status === 201) {
                alert("Cadastro realizado com sucesso");
                await AsyncStorage.setItem("@user_name", name); // Armazena o nome do usuário
                navigation.reset({
                    index: 0,
                    routes: [{ name: "BottonRoutes" }],
                });
            } else {
                alert(`Erro no cadastro: ${result.error}`);
            }
        } catch (error) {
            alert(`Erro ao se conectar com o servidor. URL: ${renderVaribale}/cadastro   ERRO: ${error}`);
        } finally {
            setLoading(false);
        }
    }

    async function redirectCadastro() {
        navigation.navigate("Login");
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain" />
                <Text style={style.text}>Crie sua conta</Text>
            </View>

            <View style={style.boxMid}>
                <Input
                    value={name}
                    onChangeText={(text) => setName(text)}
                    title="NOME COMPLETO"
                    IconRigth={MaterialIcons}
                    iconRightName="person"
                />
                <Input
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    title="ENDEREÇO DE E-MAIL"
                    IconRigth={MaterialIcons}
                    iconRightName="email"
                />
                <Input
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    title="SENHA"
                    IconRigth={Octicons}
                    iconRightName={showPassword ? "eye" : "eye-closed"}
                    secureTextEntry={showPassword}
                    onIconRigthPress={() => setShowPassword(!showPassword)}
                />
            </View>

            <View style={style.boxBotton}>
                <Button
                    text="CADASTRAR- SE"
                    loading={loading}
                    onPress={registerUser}
                />
            </View>

            <Text style={style.textBotton}>
                Já tem uma conta?{" "}
                <Text onPress={redirectCadastro} style={{ color: temas.cores.primaria }}>
                    Entre agora!
                </Text>
            </Text>
        </View>
    );
}
