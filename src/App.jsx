import { useState } from 'react';
import Login from './pages/Login/App';
import Layout from './components/Layout';
import Dashboard from './pages/home/App';
import FiltragemInteligente from './pages/Editais/App';
import { useAuth } from './context/AuthContext';

function AppRoutes() {
  const { user, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState('dashboard'); 

  if (loading) return <div className="h-screen flex items-center justify-center bg-black text-white">Carregando...</div>;

  if (!user) {
    return <Login />;
  }

  return (
    <Layout>
      <div className="mb-6 flex gap-4">
        <button onClick={() => setCurrentPage('dashboard')} className="text-xs border p-1 border-white/20">Ir para Dashboard</button>
        <button onClick={() => setCurrentPage('filtros')} className="text-xs border p-1 border-white/20">Ir para Filtros</button>
      </div>
      {currentPage === 'dashboard' ? <Dashboard /> : <FiltragemInteligente />}
    </Layout>
  );
}


import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}