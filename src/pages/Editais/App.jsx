// src/pages/FiltragemInteligente.jsx
import React, { useState } from 'react';

export default function FiltragemInteligente() {
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');

  const editais = [
    { id: 1, tipo: 'Auxílio', titulo: 'Edital PROEST 04/2026 - Auxílio Manutenção', prazo: 'Encerra em 3 dias', valor: 'R$ 700,00', status: 'Aberto' },
    { id: 2, tipo: 'Pesquisa', titulo: 'Seleção PIBIC - Monitoramento de Solos com IoT', prazo: 'Encerra em 15 dias', valor: 'R$ 700,00', status: 'Aberto' },
    { id: 3, tipo: 'Estágio', titulo: 'Estágio DTI - Suporte Técnico e Redes', prazo: 'Encerra em 5 dias', valor: 'R$ 1.125,69', status: 'Aberto' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      
      {/* SIDEBAR DE FILTROS */}
      <aside className="w-full lg:w-1/4 bg-white/5 border border-white/10 rounded-2xl p-6 h-fit backdrop-blur-sm">
        <h3 className="font-bold text-lg mb-6 text-[#3ab0ff]">Filtros Inteligentes</h3>
        
        <div className="space-y-6">
          <div>
            <label className="text-xs uppercase tracking-wider text-white/60 font-bold mb-3 block">Categoria</label>
            {['Todos', 'Assistência (PROEST)', 'Pesquisa (PIBIC)', 'Extensão', 'Estágio'].map(f => (
              <label key={f} className="flex items-center gap-3 mb-2 cursor-pointer group">
                <input type="radio" name="categoria" className="accent-[#3ab0ff] w-4 h-4" defaultChecked={f === 'Todos'} onClick={() => setFiltroAtivo(f)} />
                <span className="text-sm text-white/80 group-hover:text-white transition">{f}</span>
              </label>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10">
            <label className="text-xs uppercase tracking-wider text-white/60 font-bold mb-3 block">Campus</label>
            <select className="w-full bg-black/40 border border-white/10 rounded-lg p-2 text-sm text-white outline-none focus:border-[#3ab0ff]">
              <option>São Cristóvão</option>
              <option>Aracaju (Saúde)</option>
              <option>Itabaiana</option>
            </select>
          </div>
        </div>
      </aside>

      {/* LISTA DE RESULTADOS */}
      <section className="w-full lg:w-3/4 space-y-4">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold">Oportunidades Disponíveis</h2>
            <p className="text-sm text-[#a1a1aa]">Mostrando resultados para: <span className="text-white">{filtroAtivo}</span></p>
          </div>
          <span className="text-sm bg-white/10 px-3 py-1 rounded-full">{editais.length} encontrados</span>
        </div>

        {/* CARDS DE EDITAIS (Lista) */}
        {editais.map(edital => (
          <div key={edital.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#3ab0ff]/50 transition-all cursor-pointer flex flex-col md:flex-row justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] uppercase font-bold bg-[#3ab0ff]/20 text-[#3ab0ff] px-2 py-0.5 rounded">
                  {edital.tipo}
                </span>
                <span className="text-[10px] uppercase font-bold bg-green-500/20 text-green-400 px-2 py-0.5 rounded flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> {edital.status}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">{edital.titulo}</h4>
              <p className="text-sm text-[#a1a1aa] flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {edital.prazo}
              </p>
            </div>
            
            <div className="flex flex-col justify-between items-start md:items-end border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
              <div className="text-left md:text-right mb-4">
                <span className="block text-[10px] text-white/50 uppercase font-bold">Bolsa / Auxílio</span>
                <span className="text-lg font-extrabold text-white">{edital.valor}</span>
              </div>
              <button className="px-5 py-2 bg-white/10 hover:bg-[#3ab0ff] hover:text-black text-white text-sm font-bold rounded-lg transition-colors">
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}