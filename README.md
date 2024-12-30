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
cd MyPersonalCloset
bun install

# Rode o aplicativo
bun start
```

---

## 5. 🎨 Design do Aplicativo
- **Telas principais**:
  - ***Tela de login/cadastro***
    - Acesso ao sistema por meio de login ou criação de conta. Inclui campos de e-mail e senha e suporte a google.
  - ***Tela de início***
    - Página principal com atalhos para funcionalidades e sugestões personalizadas, oferecendo uma navegação rápida e intuitiva.
  - ***Tela de roupas adicionadas***
    - Lista de roupas salvas pelo usuário.
  - ***Tela de Perfil***
    - Exibe informações pessoais do usuário, como foto e nome, além de opções para editar dados e visualizar contador de looks adicionados.
  - ***Tela de configurações***
    - Ajustes do aplicativo, incluindo idioma, privacidade, etc.

---

## 6. 🎨 Estilo
- **Tema padrão**:
  ```javascript
  export const temas = {
    cores: {
        primaria: '#4B223F', // tom mais escuro do roxo
        secundaria: '#6A3354', // segundo tom mais escuro
        lightgray: '#9B637D', // tom intermediário mais claro
        gray: '#B47B95', // tom mais médio
        darkgray: '#D49DB0', // tom mais claro
        insideGray: '#EEC4CF', // tom mais suave da paleta
        bgScreen: '#F5F0F5', // tom quase branco
        bgCard: '#FFFFFF', // branco
    }

---


## 7. 🔗 Referências
- https://reactnative.dev/docs/
- https://docs.expo.dev/

