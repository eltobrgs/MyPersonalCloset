import React from "react";
import { Text, View, Image, ActivityIndicator } from "react-native";
import { style } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { temas } from "../../global/temas";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { renderVaribale } from "../../global/variables";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
    const navigation = useNavigation<NavigationProp<any>>();

    // Estados para armazenar os valores dos campos e o status de carregamento
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    // Função de login
    async function getLogin() {
        if (!email || !password) {
            alert("Preencha todos os campos");
            return;
        }

        try {
            setLoading(true);

            const response = await fetch(`${renderVaribale}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();

            if (response.status === 200) {
                alert("Login bem-sucedido!");

                // Mudança: Armazenamos o token após o login com sucesso
                await AsyncStorage.setItem('userToken', result.token);

                // Agora, chamamos a função para obter os dados do usuário após o login
                await getUserData(result.token);

                navigation.reset({
                    index: 0,
                    routes: [{ name: "BottonRoutes" }],
                });
            } else {
                alert(`Erro no login: ${result.error}`);
            }
        } catch (error) {
            alert("Erro ao se conectar com o servidor.");
        } finally {
            setLoading(false);
        }
    }

    // Função para buscar os dados do usuário (nome, por exemplo)
    async function getUserData(token: any) {
        try {
            const response = await fetch(`${renderVaribale}/me`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`, // Envia o token para autenticar a requisição
                },
            });

            const user = await response.json();
            if (response.status === 200) {
                // Armazenando o nome do usuário no AsyncStorage
                await AsyncStorage.setItem('userName', user.name); // Agora o nome é armazenado
            } else {
                alert("Erro ao buscar dados do usuário.");
            }
        } catch (error) {
            console.error("Erro ao recuperar os dados do usuário:", error);
        }
    }

    // Função para redirecionar para a tela de cadastro
    async function redirectRegister() {
        navigation.navigate("Cadastro");
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain" />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>

            <View style={style.boxMid}>
                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="ENDEREÇO DE E-MAIL"
                    IconRigth={MaterialIcons}
                    iconRightName="email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Input
                    value={password}
                    onChangeText={setPassword}
                    title="SENHA"
                    IconRigth={Octicons}
                    iconRightName={showPassword ? "eye" : "eye-closed"}
                    secureTextEntry={showPassword}
                    onIconRigthPress={() => setShowPassword(!showPassword)}
                />
            </View>

            <View style={style.boxBotton}>
                <Button text="ENTRAR" loading={loading} onPress={getLogin} />
            </View>

            <Text style={style.textBotton}>
                Ainda não tem uma conta?{" "}
                <Text onPress={redirectRegister} style={{ color: temas.cores.primaria }}>
                    Crie uma agora mesmo!
                </Text>
            </Text>
        </View>
    );
}
