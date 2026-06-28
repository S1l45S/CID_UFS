<div align="center">

<img src="public/ufsLogo.svg" alt="Logo UFS" width="80" />

# 🎓 CID - Central de Informação Discente

**Projeto acadêmico desenvolvido para centralizar e simplificar o acesso às informações institucionais da Universidade Federal de Sergipe (UFS).**

<p>
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/TailwindCSS-4.3-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/MongoDB-7.3-47A248?logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Netlify-Serverless-00C7B7?logo=netlify&logoColor=white" alt="Netlify">
  <img src="https://img.shields.io/badge/Licença-MIT-green" alt="MIT License">
</p>

</div>

---

> [!NOTE]
> Este projeto foi desenvolvido com o objetivo de reduzir a dificuldade enfrentada pelos estudantes da Universidade Federal de Sergipe (UFS) em encontrar informações sobre auxílios estudantis, editais, programas de pesquisa, extensão e demais oportunidades acadêmicas.
>
> A plataforma reúne essas informações em um único ambiente, simulando a autenticação do SIGAA para proporcionar uma experiência familiar ao usuário.

---

# 📑 Sumário

- [✨ Funcionalidades](#-funcionalidades)
- [🏗 Arquitetura do Sistema](#-arquitetura-do-sistema)
- [🛠 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [⚙ Variáveis de Ambiente](#-variáveis-de-ambiente)
- [🚀 Como Executar](#-como-executar)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [📄 Licença](#-licença)
- [👨‍💻 Autor](#-autor)

---

# ✨ Funcionalidades

O sistema oferece os seguintes recursos:

- 🔐 Autenticação simulando o acesso ao **SIGAA** utilizando **JWT**.
- 📊 Dashboard personalizado para o estudante.
- 📖 Páginas explicativas sobre direitos estudantis e programas institucionais.
- 🔎 Consulta e filtragem de editais por categoria.
- 🎓 Informações sobre:
  - Assistência Estudantil
  - Pesquisa (PIBIC)
  - Extensão
  - Ligas Acadêmicas
  - Estágios
- 🔍 Sistema de busca integrado.
- 📱 Interface totalmente responsiva.
- 🍪 Persistência da sessão através de Cookies/JWT.

---

# 🏗 Arquitetura do Sistema

O projeto utiliza uma arquitetura híbrida baseada em **React** no frontend e **Netlify Functions** no backend, comunicando-se com um banco de dados **MongoDB**.

```mermaid
flowchart LR

    U[Aluno] --> R[React + Vite]

    R --> A[AuthContext]
    R --> P[Pages]
    R --> C[Components]

    P --> N[Netlify Functions]

    N --> M[(MongoDB)]

    M --> N
    N --> R
🛠 Tecnologias Utilizadas
Frontend
Categoria	Tecnologia
Framework	React 19
Build Tool	Vite 8
CSS	Tailwind CSS 4
Estado Global	Context API
Autenticação	jwt-decode
Backend
Categoria	Tecnologia
Runtime	Node.js
API	Netlify Functions
Banco de Dados	MongoDB
Driver	MongoDB Driver
Autenticação	JSON Web Token (JWT)
Deploy
Serviço	Utilização
Netlify	Frontend + Serverless Functions
⚙ Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto contendo:

Variável	Descrição
MONGODB_URI	String de conexão com o MongoDB
JWT_SECRET	Chave utilizada para assinatura dos Tokens JWT

Exemplo:

MONGODB_URI=sua_string_de_conexao
JWT_SECRET=sua_chave_secreta
🚀 Como Executar
Pré-requisitos
Node.js (LTS)
MongoDB
npm
1. Clone o repositório
git clone <url-do-repositório>
cd CID_UFS
2. Instale as dependências
npm install
3. Configure o ambiente

Crie o arquivo:

.env

Com as variáveis:

MONGODB_URI=
JWT_SECRET=
4. Execute em modo de desenvolvimento
npm run dev
5. Gerar Build
npm run build
6. Visualizar Build
npm run preview

Observação: Para executar as Netlify Functions localmente de forma integrada, utilize:

netlify dev
📁 Estrutura do Projeto
CID_UFS/
├── netlify/
│   └── functions/
│       └── login.js
│
├── public/
│   └── ufsLogo.svg
│
├── src/
│   ├── components/
│   │   └── Layout.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── pages/
│   │   ├── Editais/
│   │   ├── Login/
│   │   ├── explicacaoCategoria/
│   │   └── home/
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
📄 Licença

Este projeto está licenciado sob a licença MIT.

Consulte o arquivo LICENSE para mais informações.

👨‍💻 Autor

Silas Santos

Projeto desenvolvido como parte de atividades acadêmicas da Universidade Federal de Sergipe (UFS).
