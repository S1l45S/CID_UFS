// src/components/Layout.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Layout({ children, paginaAtual, navegarPara }) {
  const { user, logout } = useAuth();

  const obterIniciais = (nomeCompleto) => {
    if (!nomeCompleto) return "US";
    const partesNome = nomeCompleto.trim().split(/\s+/);
    if (partesNome.length === 1) return partesNome[0].charAt(0).toUpperCase();
    return (partesNome[0].charAt(0) + partesNome[partesNome.length - 1].charAt(0)).toUpperCase();
  };

  const iniciais = obterIniciais(user?.nome);

  return (
    <div className="min-h-screen bg-[#111111] font-plusjakarta text-white">
      {/* HEADER MANTIDO IGUAL AO ANTERIOR */}
      <header className="bg-[#001f5c] w-full px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <span className="text-4xl font-extrabold text-white tracking-tighter">ufs</span>
          <div className="h-10 w-px bg-white/30"></div>
          <div className="flex flex-col text-left">
            <span className="text-xl font-bold text-white/80 leading-none mb-1">CID</span>
            <span className="text-[10px] text-white/80 uppercase font-light tracking-widest leading-none">
              Central de Informação Discente
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Pesquisar editais, auxílios..." 
              className="w-full bg-white/10 border border-white/20 rounded-full py-2 px-4 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#3ab0ff]"
            />
            <svg className="w-4 h-4 absolute right-4 top-2.5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          
          <div className="hidden md:flex items-center gap-3 bg-white/10 py-1.5 px-3 rounded-full cursor-pointer hover:bg-white/20 transition">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3ab0ff] to-[#0052cc] flex items-center justify-center font-bold text-xs">
              {iniciais}
            </div>
            <span className="text-sm font-medium">{user?.nome || 'Carregando...'}</span>
            <button onClick={logout} className="ml-2 pl-2 border-l border-white/20 text-xs text-white/50 hover:text-red-400 uppercase font-bold transition-colors">
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* NAVEGAÇÃO FUNCIONAL */}
      <nav className="bg-[#1a1a1a] border-b border-white/5 py-3 px-6 overflow-x-auto">
        <div className="flex gap-3 max-w-7xl mx-auto">
          <button 
            onClick={() => navegarPara('inicio')}
            className={`whitespace-nowrap px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${paginaAtual === 'inicio' ? 'bg-white/20 text-white' : 'bg-transparent text-white/50 hover:bg-white/10'}`}
          >
            INÍCIO
          </button>
          
          {/* Aba de Editais/Oportunidades em Destaque */}
          <button 
            onClick={() => navegarPara('oportunidades')}
            className={`whitespace-nowrap px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 ${paginaAtual === 'oportunidades' ? 'bg-[#3ab0ff] text-black shadow-[0_0_15px_rgba(58,176,255,0.4)]' : 'bg-[#3ab0ff]/10 text-[#3ab0ff] hover:bg-[#3ab0ff]/20'}`}
          >
            <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
            EDITAIS ABERTOS
          </button>

          <button className="whitespace-nowrap px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white/50 bg-transparent hover:bg-white/10 transition-colors">
            MEUS AUXÍLIOS
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 lg:p-10">
        {children}
      </main>
    </div>
  );
}