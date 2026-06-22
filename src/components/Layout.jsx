// src/components/Layout.jsx
import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#111111] font-plusjakarta text-white">
      {/* HEADER INSTITUCIONAL (Inspirado na imagem) */}
      <header className="bg-[#001f5c] w-full px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-4xl font-extrabold text-white tracking-tighter">ufs</span>
          <div className="h-10 w-px bg-white/30"></div>
          <div className="text-left text-[10px] text-white/90 uppercase font-light tracking-wide leading-tight">
            Universidade<br />Federal de<br />Sergipe
          </div>
          <div className="ml-4 pl-4 border-l border-white/20">
            <span className="text-xl font-bold text-[#3ab0ff]">CID</span>
          </div>
        </div>

        {/* Barra de Pesquisa Rápida e Perfil */}
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
              SS
            </div>
            <span className="text-sm font-medium mr-2">Silas Santos</span>
          </div>
        </div>
      </header>

      {/* BARRA DE NAVEGAÇÃO (Botões formato "Pill") */}
      <nav className="bg-[#1a1a1a] border-b border-white/5 py-3 px-6 overflow-x-auto">
        <div className="flex gap-3 max-w-7xl mx-auto">
          {['INÍCIO', 'MEUS AUXÍLIOS (PROEST)', 'PESQUISA E INOVAÇÃO (PIBIC)', 'ESTÁGIOS', 'PRAZOS'].map((item, i) => (
            <button key={i} className={`whitespace-nowrap px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${i === 0 ? 'bg-[#3ab0ff] text-black' : 'bg-white/10 text-white/80 hover:bg-white/20'}`}>
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* CONTEÚDO DAS PÁGINAS */}
      <main className="max-w-7xl mx-auto p-6 lg:p-10">
        {children}
      </main>
    </div>
  );
}