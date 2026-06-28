<div align="center">

<img src="public/ufsLogo.svg" alt="Logo UFS" width="80"/>

# 🎓 CID - Central de Informação Discente

**Projeto acadêmico desenvolvido para centralizar e simplificar o acesso às informações institucionais da Universidade Federal de Sergipe (UFS).**

<p>
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/TailwindCSS-4.3-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/MongoDB-7.3-47A248?logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Netlify-Serverless-00C7B7?logo=netlify&logoColor=white" alt="Netlify"/>
  <img src="https://img.shields.io/badge/Licen%C3%A7a-MIT-green" alt="MIT License"/>
</p>

</div>

---

> [!NOTE]
> O **CID (Central de Informação Discente)** é um projeto acadêmico desenvolvido para reunir, em uma única plataforma, informações sobre assistência estudantil, pesquisa, extensão e demais oportunidades oferecidas pela Universidade Federal de Sergipe (UFS).
>
> A proposta é reduzir a dependência da divulgação informal ("boca a boca"), centralizando editais, programas e orientações em um ambiente intuitivo que simula a experiência de autenticação do SIGAA.

---

# 📑 Sumário

- [✨ Funcionalidades](#-funcionalidades)
- [🏗 Arquitetura do Sistema](#-arquitetura-do-sistema)
- [🛠 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [📄 Licença](#-licença)
- [👨‍💻 Autor](#-autor)

---

# ✨ Funcionalidades

O sistema disponibiliza os seguintes recursos:

- 🔐 Autenticação simulando o acesso ao SIGAA utilizando JWT.
- 📊 Dashboard personalizado para o estudante.
- 📖 Explicações detalhadas sobre programas e benefícios estudantis.
- 🔎 Pesquisa e filtragem de editais por categoria.
- 🎓 Informações sobre:
  - Assistência Estudantil (PROEST)
  - Pesquisa (PIBIC)
  - Extensão
  - Ligas Acadêmicas
  - Estágios
- 🔍 Sistema de busca integrado.
- 📱 Interface totalmente responsiva.
- 🍪 Persistência da autenticação através de Cookies e JWT.

---

# 🏗️ Arquitetura do Sistema (Visão Geral)

O sistema foi desenvolvido seguindo o modelo de arquitetura **JAMstack** e **Serverless**, promovendo uma separação completa entre a camada de apresentação (Frontend) e a lógica de negócios/persistência (Backend e Banco de Dados). Isso garante alta escalabilidade, baixo custo de manutenção e performance otimizada.

Abaixo está a representação visual da arquitetura em camadas, detalhando o fluxo de dados e os limites de cada componente do sistema:

```mermaid
graph TD
    subgraph Camada_Apresentacao [Camada de Apresentação / Client-Side]
        A[Aluno / Navegador] -->|Interage com a UI| B[React]
        
        subgraph Core_Frontend [Estrutura Interna do Frontend]
            B --> C[Layout & Componentes Reutilizáveis]
            B --> D[Rotas & Páginas]
            B --> E[AuthContext / Estado de Autenticação]
        end
    end

    subgraph Camada_Serverless [Camada de Computação / Serverless]
        D -->|Consome endpoints /.netlify/functions/*| F[Netlify Functions]
        E -->|Validação & Envio de Credenciais| F
        F -->|Script: login.js| G[Gerador de Token JWT / Cookies]
    end

    subgraph Camada_Dados [Camada de Persistência / Dados]
        G -->|Driver Nativo de Conexão NoSQL| H[(MongoDB Atlas)]
    end

    %% Estilização do Gráfico
    classDef frontend fill:#e3f2fd,stroke:#1565c0,stroke-width:2px,color:#0d47a1;
    classDef serverless fill:#efebe9,stroke:#4e342e,stroke-width:2px,color:#3e2723;
    classDef dados fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#1b5e20;
    
    class A,B,C,D,E frontend;
    class F,G serverless;
    class H dados;
```

# 🛠 Tecnologias Utilizadas

## Frontend

| Categoria | Tecnologia |
|-----------|------------|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Estilização | Tailwind CSS 4 |
| Gerenciamento de Estado | Context API |
| Autenticação | jwt-decode |

---

## Backend

| Categoria | Tecnologia |
|-----------|------------|
| Runtime | Node.js |
| API | Netlify Functions |
| Banco de Dados | MongoDB |
| Driver | MongoDB Driver |
| Autenticação | JSON Web Token (JWT) |

---

## Deploy

| Serviço | Finalidade |
|----------|------------|
| Netlify | Hospedagem do Frontend e das Serverless Functions |

---
---

# 📁 Estrutura do Projeto

```text
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
```

---

# 📄 Licença

Este projeto está licenciado sob a licença **MIT**.

Consulte o arquivo **LICENSE** para mais informações.

---

# 👨‍💻 Autor

**Silas Santos**

Projeto desenvolvido como parte das atividades acadêmicas da **Universidade Federal de Sergipe (UFS)**.

---

<div align="center">

## ⭐ Gostou do projeto?

Se este projeto foi útil para você, considere deixar uma **⭐** no repositório.

Desenvolvido com ❤️ utilizando **React**, **Vite**, **Tailwind CSS**, **MongoDB** e **Netlify**.

</div>
