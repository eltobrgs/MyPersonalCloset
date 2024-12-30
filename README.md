# MyPersonalCloset

[![React Native](https://img.shields.io/badge/React%20Native-0.72.3-blue)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-49.0.0-000000)](https://expo.dev/)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

**MyPersonalCloset** é um aplicativo móvel para ajudar os usuários a gerenciar seu guarda-roupa pessoal, adicionar looks e visualizar dicas de moda. Ele foi desenvolvido utilizando **React Native** e **Expo**, garantindo uma experiência multiplataforma e fácil de manter.

---

## 🚀 Funcionalidades

- 👗 **Gerenciamento de Looks**: Adicione, edite e visualize seus looks.
- 📸 **Captura de Imagens**: Tire fotos das suas roupas e adicione ao seu guarda-roupa.
- 🧑‍💻 **Perfil do Usuário**: Edite informações pessoais como nome, foto de perfil e preferências de moda.
- 🔔 **Notificações**: Receba lembretes para usar determinados looks ou para eventos especiais.

---

## 🛠️ Tecnologias Utilizadas

- **[React Native](https://reactnative.dev/)**: Framework para desenvolvimento de apps móveis.
- **[Expo](https://expo.dev/)**: Plataforma para construir, compilar e testar aplicativos React Native.
- **[React Navigation](https://reactnavigation.org/)**: Navegação entre telas.
- **[Expo CLI](https://docs.expo.dev/workflow/expo-cli/)**: Ferramenta para gerenciamento do projeto.
- **[Expo Go](https://expo.dev/client)**: Teste do app diretamente no dispositivo.










# ✨ **Documentação do Projeto: Meu Personal Closet** ✨

## 1. 🔍 Introdução
- **Nome do projeto**: Meu Personal Closet
- **Descrição**: Um aplicativo de guarda-roupa online que permite organizar, catalogar e planejar suas roupas e acessórios.
- **Objetivo**: Simplificar a organização do guarda-roupa, oferecendo funcionalidades como categorização, sugestão de combinações, e gestão de peças.
- **Público-alvo**: Usuários interessados em melhorar sua organização pessoal e otimizar o uso de suas roupas.

---

## 2. 🌐 Estrutura do Projeto
- **Arquitetura**:
  ```
  src/
    @Types/      # Definições de tipos TypeScript
    assets/      # Imagens, ícones, etc.
    components/  # Componentes reutilizáveis
    context/     # Gerenciamento de estado global (Context API)
    global/      # Estilos globais e configurações padrão
    pages/       # Páginas principais do aplicativo
    routes/      # Configuração de rotas e navegação
  ```
- **Tecnologias e bibliotecas usadas**:
  - React Native
  - React Navigation
  - Expo Go
  - Expo Cli

---

## 3. 📂 Funcionalidades
- **Cadastro e login**:
  - Sistema CRUD, que permite a criação de sessóes.
- **Adicionar peças**:
  - Permite o usuário adicionar fotos, categoria (ex.: camisa, calça), e detalhes (ex.: cor, tecido).
- **Contador de peças cadastradas**:
  - Contador que expõe o número de peças cadastradas.
- **Perfil de Usuário**:
  - Informações do cliente (são carregadas de acordo com o que foi fornecido no cadastro).

---

## 4. ⚙️ Configuração e Instalação

### Pré-requisitos
- Node.js
- Bun
- Android Studio / Xcode (para emuladores)

### Passos
```bash
# Clone o repositório
git clone https://github.com/eltobrgs/MyPersonalCloset.git
# Instale as dependências
cd meu-personal-closet
bun install

# Rode o aplicativo
bun start
```

---

## 5. 🎨 Design do Aplicativo
- Descreva o layout das telas com wireframes ou capturas de tela.
- **Telas principais**:
  - Tela de login/cadastro.
  - Tela de catálogo de roupas.
  - Tela de combinação sugerida.
  - Tela de configurações.

---

## 8. 🎨 Estilo e Temas
- **Guia de estilo**: Paleta de cores, fontes, e regras de espaçamento.
- **Exemplo de um tema padrão**:
  ```javascript
  const theme = {
    colors: {
      primary: '#6200ee',
      background: '#f6f6f6',
      text: '#000000',
    },
  };
  ```

---


## 12. 🔗 Referências
- Links úteis e documentação de bibliotecas usadas.

