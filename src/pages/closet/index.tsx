import React from "react";
import { View, ScrollView } from "react-native";
import { style } from "./styles";
import look from "../../assets/look1.png";
import ClosetItem from "../../components/ClosetItem";

export default function Closet() {
    return (
        <View style={style.container}>
            
            <ScrollView style={style.container}>
                <ClosetItem
                    image={look} // Substitua com o caminho da imagem
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