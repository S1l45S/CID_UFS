// src/pages/ExplicacaoCategoria/App.jsx
import React from 'react';

export default function ExplicacaoCategoria({ dados, navegarPara }) {
  if (!dados) return null;

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      
      {/* Botão Voltar */}
      <button 
        onClick={() => navegarPara('inicio')}
        className="mb-6 text-sm text-white/50 hover:text-white flex items-center gap-2 transition-colors"
      >
        <span>&larr;</span> Voltar para o Início
      </button>

      {/* Banner da Categoria */}
      <div 
        className="w-full h-64 rounded-3xl relative overflow-hidden mb-8 shadow-2xl"
        style={{ backgroundImage: `url(${dados.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${dados.colorGradient} mix-blend-multiply opacity-90`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 p-8 md:p-12">
          <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-3 inline-block">
            {dados.setor}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
            {dados.titulo}
          </h1>
        </div>
      </div>

      {/* Conteúdo Explicativo */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 space-y-8 backdrop-blur-sm text-white/80 leading-relaxed text-lg">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">O que é e quem tem direito?</h2>
          <p>{dados.oQueE}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Passo a Passo Geral</h2>
          <ul className="space-y-4">
            {dados.passos.map((passo, index) => (
              <li key={index} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3ab0ff]/20 text-[#3ab0ff] flex items-center justify-center font-bold border border-[#3ab0ff]/50">
                  {index + 1}
                </span>
                <span className="pt-1">{passo}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Call to Action (CTA) */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-white mb-2">Tudo certo? Veja as oportunidades disponíveis.</h3>
          <p className="text-sm mb-6 text-white/60">Acesse a central de editais com o filtro já aplicado para você.</p>
          
          <button 
            onClick={() => navegarPara('oportunidades', dados.filtro)}
            className="px-8 py-4 bg-gradient-to-r from-[#3ab0ff] to-[#0052cc] text-white font-extrabold rounded-full hover:shadow-[0_0_20px_rgba(58,176,255,0.5)] hover:-translate-y-1 transition-all flex items-center gap-3 text-lg"
          >
            Conferir Editais Abertos <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}