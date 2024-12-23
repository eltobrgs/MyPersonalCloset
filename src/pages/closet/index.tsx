import React from "react";
import { View, ScrollView } from "react-native";
import { style } from "./styles";
import look from "../../assets/look1.png";
import ClosetItem from "../../components/ClosetItem";
import logo from "../../assets/logo.png";
import CustomHeader from "../../components/Header";

export default function Closet() {
    return (
        <View style={style.geral}>
            {/* Header com ajuste de estilo */}
            <CustomHeader title="Meu Closet" number={''} imageSource={logo}/>

            <ScrollView style={style.scrollContainer}>
                {/* Itens de closet */}
                <ClosetItem
                    image={look}
                    title="Look para inverno"
                    description="Trench coat marrom com cinto ajustado na cintura, vestido estampado preto e branco por baixo..."
                    onPress={() => console.log('Look para inverno')}
                />
                <ClosetItem
                    image={look}
                    title="Despojado, moderno"
                    description="Trench coat marrom com cinto ajustado na cintura, vestido estampado preto e branco por baixo..."
                    onPress={() => console.log('Despojado, moderno')}
                />
                <ClosetItem
                    image={look}
                    title="Estiloso e clássico"
                    description="Chapéu marrom, suéter branco confortável e saia midi com estampa..."
                    onPress={() => console.log('Estiloso e clássico')}
                />
                <ClosetItem
                    image={look}
                    title="Romântico e leve"
                    description="Vestido com estampa floral em tons de azul e vermelho, manga longa e cinto..."
                    onPress={() => console.log('Romântico e leve')}
                />
            </ScrollView>
        </View>
    );
}
