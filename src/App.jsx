import { useState } from 'react';
import Login from './pages/Login/App';
import Layout from './components/Layout';
import Dashboard from './pages/home/App';
import FiltragemInteligente from './pages/Editais/App';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard'); 

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <Layout>
      <div className="mb-6 flex gap-4">
        {/* Botoes temporários só para você navegar no seu protótipo */}
        <button onClick={() => setCurrentPage('dashboard')} className="text-xs border p-1 border-white/20">Ir para Dashboard</button>
        <button onClick={() => setCurrentPage('filtros')} className="text-xs border p-1 border-white/20">Ir para Filtros</button>
      </div>

      {currentPage === 'dashboard' ? <Dashboard /> : <FiltragemInteligente />}
    </Layout>
  );
}