import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "../pages/login";
import BottonRoutes from "./bottom.routes";
import Cadastro from "../pages/cadastro";
import UserPreferences from "../pages/UserPreferences";
import { ActivityIndicator, View } from "react-native";

export default function Routes() {
    const Stack = createStackNavigator();
    const [initialRoute, setInitialRoute] = useState<string | null>(null); // Inicialmente indefinido

    useEffect(() => {
        const checkToken = async () => {
            try {
                const token = await AsyncStorage.getItem("userToken");
                setInitialRoute(token ? "BottonRoutes" : "Login");
            } catch (error) {
                console.error("Erro ao verificar token no AsyncStorage:", error);
                setInitialRoute("Login"); // Garante que sempre temos uma rota inicial
            }
        };

        checkToken();
    }, []);

    // Exibe carregamento enquanto verifica o token
    if (initialRoute === null) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <Stack.Navigator
            initialRouteName={initialRoute}
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "#F5F5F5",
                },
            }}
        >
            <Stack.Screen name="BottonRoutes" component={BottonRoutes} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="UserPreferences" component={UserPreferences} />

        </Stack.Navigator>
    );
}
