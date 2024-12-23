import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import PreferenceItem from '../../components/PreferenceItem';
import { style } from './styles';

import profilepic from '../../assets/profilepic.png';

const UserProfile = () => {
  return (
   


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
          <Text style={style.counterText}>23 LOOKS CADASTRADOS</Text>
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
    
  );
};

export default UserProfile;
