import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import PreferenceItem from '../../components/PreferenceItem';
import CustomHeader from '../../components/Header'; 
import profilepic from '../../assets/profilepic.png';
import logo from '../../assets/logo.png'; // Adicione o logo caso não esteja importado
import { style } from './styles';
import { useAuth } from '../../context/authContext_list';

const UserProfile = () => {
   const {looks } = useAuth();
  return (
    
    <View style={{ flex: 1, backgroundColor: '#FFF8FB' }}>
      {/* Cabeçalho personalizado */}
      <CustomHeader title="Perfil de Usuário" number="" imageSource={logo} />

      <ScrollView contentContainerStyle={style.container}>
        {/* Imagem de Perfil */}
        <Image
          source={profilepic}
          style={style.profileImage}
        />
        <Text style={style.name}>Paloma Sousa</Text>
        <Text style={style.subtitle}>MODA FEMININA</Text>

        {/* Contador */}
        <View style={style.counterContainer}>
          <Text style={style.counterText}>{looks.length.toString()} LOOKS CADASTRADOS</Text>
        </View>

        {/* Preferências */}
        <View style={style.preferencesContainer}>
          <Text style={style.preferencesTitle}>PREFERÊNCIAS</Text>
          <PreferenceItem label="Moda alvo:" value="Moda Feminina" />
          <PreferenceItem label="Data de nascimento:" value="05/03/2001" icon="calendar" />
          <PreferenceItem label="Endereço:" value="Parque Industrial, Picos - PI, Brasil" />
          <PreferenceItem label="Tema:" value="Claro" />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserProfile;
