import React, { useState, useEffect } from 'react';

export default function Editais({ categoriaInicial }) {
  const [filtroAtivo, setFiltroAtivo] = useState(categoriaInicial || 'Todos');
  const [editalExpandidoId, setEditalExpandidoId] = useState(null);

  useEffect(() => {
    setFiltroAtivo(categoriaInicial);
    setEditalExpandidoId(null);
  }, [categoriaInicial]);

  const todosEditais = [
    {
      id: 1, tipo: 'Auxílio', titulo: 'Edital PROEST 04/2026 - Auxílio Manutenção', prazo: 'Encerra em 3 dias', valor: 'R$ 700,00', status: 'Aberto',
      resumo: 'Este edital visa preencher 150 vagas para o Auxílio Manutenção. Requisitos: Renda per capita familiar inferior a 1,5 salário mínimo e estar cursando o primeiro ano. A documentação deve ser enviada unicamente via SIGAA.'
    },
    {
      id: 2, tipo: 'Pesquisa', titulo: 'Seleção PIBIC - Monitoramento de Solos com IoT', prazo: 'Encerra em 15 dias', valor: 'R$ 700,00', status: 'Aberto',
      resumo: 'Busca-se bolsista para atuar no laboratório de automação. Necessário conhecimento básico em C/C++ ou Python, e noções de microcontroladores (ESP32/Arduino). Dedicação de 20h semanais.'
    },
    {
      id: 3, tipo: 'Estágio', titulo: 'Estágio DTI - Suporte Técnico e Redes', prazo: 'Encerra em 5 dias', valor: 'R$ 1.125,69', status: 'Aberto',
      resumo: 'Vaga para estudantes de Sistemas de Informação ou correlatos. Atuação no suporte técnico aos laboratórios do campus. Requer cursar do 3º ao 6º período. Benefício inclui Auxílio Transporte.'
    },
  ];

  const editaisFiltrados = filtroAtivo === 'Todos'
    ? todosEditais
    : todosEditais.filter(edital => edital.tipo === filtroAtivo);

  const alternarEdital = (id) => {
    if (editalExpandidoId === id) {
      setEditalExpandidoId(null);
    } else {
      setEditalExpandidoId(id);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in duration-500">

      <aside className="w-full lg:w-1/4 bg-white/5 border border-white/10 rounded-2xl p-6 h-fit backdrop-blur-sm">
        <h3 className="font-bold text-lg mb-6 text-[#3ab0ff]">Filtrar por</h3>
        <div className="space-y-6">
          <div>
            <label className="text-xs uppercase tracking-wider text-white/60 font-bold mb-3 block">Categoria</label>
            {['Todos', 'Auxílio', 'Apoio', 'Pesquisa', 'Extensão', 'Estágio'].map(f => (
              <label key={f} className="flex items-center gap-3 mb-2 cursor-pointer group">
                <input
                  type="radio"
                  name="categoria"
                  className="accent-[#3ab0ff] w-4 h-4"
                  checked={filtroAtivo === f}
                  onChange={() => setFiltroAtivo(f)}
                />
                <span className={`text-sm transition ${filtroAtivo === f ? 'text-white font-bold' : 'text-white/60 group-hover:text-white'}`}>
                  {f}
                </span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      <section className="w-full lg:w-3/4 space-y-4">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-3xl font-extrabold">Oportunidades e Editais</h2>
            <p className="text-sm text-[#a1a1aa] mt-1">
              Mostrando resultados para: <span className="text-[#3ab0ff] font-bold">{filtroAtivo}</span>
            </p>
          </div>
          <span className="text-sm bg-white/10 border border-white/10 px-4 py-1.5 rounded-full font-bold">
            {editaisFiltrados.length} encontrados
          </span>
        </div>

        {editaisFiltrados.length > 0 ? (
          editaisFiltrados.map(edital => (
            <div key={edital.id} className={`bg-white/5 border transition-all rounded-2xl overflow-hidden ${editalExpandidoId === edital.id ? 'border-[#3ab0ff] bg-white/10' : 'border-white/10 hover:border-[#3ab0ff]/50 hover:bg-white/10'}`}>

              {/* Parte Visível Principal */}
              <div className="p-6 flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] uppercase font-bold bg-[#3ab0ff]/20 text-[#3ab0ff] px-2 py-0.5 rounded">
                      {edital.tipo}
                    </span>
                    <span className="text-[10px] uppercase font-bold bg-green-500/20 text-green-400 px-2 py-0.5 rounded flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> {edital.status}
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
                    <span className="text-xl font-extrabold text-white">{edital.valor}</span>
                  </div>
                  <button
                    onClick={() => alternarEdital(edital.id)}
                    className="px-6 py-2 bg-transparent border border-white/20 hover:bg-white/10 text-white text-sm font-bold rounded-xl transition-colors flex items-center gap-2"
                  >
                    Detalhes
                    <svg className={`w-4 h-4 transition-transform ${editalExpandidoId === edital.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                </div>
              </div>

              {editalExpandidoId === edital.id && (
                <div className="bg-black/30 p-6 border-t border-white/10 animate-in slide-in-from-top-2 duration-300">
                  <h5 className="text-sm font-bold text-[#3ab0ff] mb-2 uppercase tracking-wider">Resumo Inteligente</h5>
                  <p className="text-sm text-white/80 leading-relaxed mb-6">
                    {edital.resumo}
                  </p>

                  <div className="flex gap-4">
                    <button className="px-5 py-2 bg-[#3ab0ff] text-black text-sm font-bold rounded-lg hover:bg-white transition-colors">
                      Ler Edital Completo (PDF)
                    </button>
                    <button className="px-5 py-2 bg-green-500 text-black text-sm font-bold rounded-lg hover:bg-green-400 transition-colors">
                      Fazer Inscrição
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center p-10 border border-dashed border-white/20 rounded-2xl text-white/50">
            Nenhum edital encontrado para esta categoria no momento.
          </div>
        )}
      </section>
    </div>
  );
}