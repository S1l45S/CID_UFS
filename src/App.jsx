// src/App.jsx
import { useState } from 'react';
import Login from './pages/Login/App';
import Layout from './components/Layout';
import Dashboard from './pages/home/App';
import Editais from './pages/Editais/App';
import ExplicacaoCategoria from './pages/ExplicacaoCategoria/App'; 
import { AuthProvider, useAuth } from './context/AuthContext';

function AppRoutes() {
  const { user, loading } = useAuth();
  
  const [paginaAtual, setPaginaAtual] = useState('inicio');
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [dadosExplicacao, setDadosExplicacao] = useState(null); // Guarda os dados do card clicado

  if (loading) return <div className="h-screen flex items-center justify-center bg-black text-white">Carregando...</div>;
  if (!user) return <Login />;

  const navegarPara = (pagina, parametro = null) => {
    setPaginaAtual(pagina);
    if (pagina === 'oportunidades') {
      setCategoriaAtiva(parametro || 'Todos');
    } else if (pagina === 'explicacao') {
      setDadosExplicacao(parametro);
    }
  };

  return (
    <Layout paginaAtual={paginaAtual} navegarPara={navegarPara}>
      {paginaAtual === 'inicio' && <Dashboard navegarPara={navegarPara} />}
      {paginaAtual === 'explicacao' && <ExplicacaoCategoria dados={dadosExplicacao} navegarPara={navegarPara} />}
      {paginaAtual === 'oportunidades' && <Editais categoriaInicial={categoriaAtiva} />}
    </Layout>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}