import React, { useState, useEffect } from 'react';
import { supabase } from '../../service/supabaseClient'; // Ajuste o caminho do seu client Supabase

export default function Editais({ categoriaInicial }) {
  const [filtroAtivo, setFiltroAtivo] = useState(categoriaInicial || 'Todos');
  const [editalExpandidoId, setEditalExpandidoId] = useState(null);
  
  const [todosEditais, setTodosEditais] = useState([]);
  const [categoriasDisponiveis, setCategoriasDisponiveis] = useState(['Todos']);
  const [carregando, setCarregando] = useState(true);

  // 1. Buscar categorias do banco de dados para popular a sidebar dinamicamente
  useEffect(() => {
    async function carregarCategorias() {
      const { data, error } = await supabase.from("categoria").select("nome_categoria");
      if (!error && data) {
        setCategoriasDisponiveis(['Todos', ...data.map(c => c.nome_categoria)]);
      }
      console.log(error);
      console.log(data)
    }
    carregarCategorias();
  }, []);

  // 2. Sincronizar o filtro quando a prop mudar
  useEffect(() => {
    setFiltroAtivo(categoriaInicial || 'Todos');
    setEditalExpandidoId(null);
  }, [categoriaInicial]);

  // 3. Buscar editais e seus relacionamentos (Órgão e Categorias) do Supabase
  useEffect(() => {
    async function carregarEditais() {
      setCarregando(true);
      
      // Consulta com Join (Relacionamento 1:N com orgao_emissor e N:M com categoria)
      let query = supabase
        .from('edital')
        .select(`
          id_edital,
          codigo_edital,
          nome_programa,
          is_aberto,
          prazo_final_inscricao,
          itens_financiaveis,
          escopo_objetivo,
          sistema_link_submissao,
          orgao_emissor (
            sigla,
            nome_orgao
          ),
          edital_categoria (
            categoria (
              nome_categoria
            )
          )
        `);

      // Se o filtro não for 'Todos', filtramos utilizando a tabela de junção
      if (filtroAtivo !== 'Todos') {
        // Buscamos primeiro os IDs dos editais que pertencem a essa categoria
        const { data: relacoes } = await supabase
          .from('edital_categoria')
          .select('id_edital')
          .textSearch('categoria.nome_categoria', filtroAtivo); // Ou filtro por ID dependendo da estrutura
      }

      const { data, error } = await query;

      if (error) {
        console.error('Erro ao buscar editais:', error.message);
      } else if (data) {
        // Mapeamos os dados para facilitar a exibição no componente
        const editaisFormatados = data.map(edital => {
          // Extrai as categorias do relacionamento N:M
          const categorias = edital.edital_categoria?.map(ec => ec.categoria?.nome_categoria) || [];
          
          return {
            id: edital.id_edital,
            tipo: categorias[0] || 'Geral', // Pega a primeira categoria principal como tipo
            categorias: categorias,
            titulo: `${edital.codigo_edital} - ${edital.nome_programa}`,
            prazo: edital.prazo_final_inscricao 
              ? `Encerra em ${new Date(edital.prazo_final_inscricao).toLocaleDateString('pt-BR')}` 
              : 'Prazo sob consulta',
            valor: edital.itens_financiaveis || 'Ver edital',
            status: edital.is_aberto ? 'Aberto' : 'Encerrado',
            resumo: edital.escopo_objetivo,
            orgao: edital.orgao_emissor?.sigla || 'Órgão Oficial',
            linkSubmissao: edital.sistema_link_submissao
          };
        });

        // Filtragem manual caso o backend traga todos e queiramos refinar no client por categoria
        const editaisFiltradosPorCategoria = filtroAtivo === 'Todos'
          ? editaisFormatados
          : editaisFormatados.filter(e => e.categorias.includes(filtroAtivo));

        setTodosEditais(editaisFiltradosPorCategoria);
      }
      setCarregando(false);
    }

    carregarEditais();
  }, [filtroAtivo]);

  const alternarEdital = (id) => {
    setEditalExpandidoId(editalExpandidoId === id ? null : id);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in duration-500">

      {/* Sidebar Dinâmica de Categorias */}
      <aside className="w-full lg:w-1/4 bg-white/5 border border-white/10 rounded-2xl p-6 h-fit backdrop-blur-sm">
        <h3 className="font-bold text-lg mb-6 text-[#3ab0ff]">Filtrar por</h3>
        <div className="space-y-6">
          <div>
            <label className="text-xs uppercase tracking-wider text-white/60 font-bold mb-3 block">Categoria</label>
            {categoriasDisponiveis.map(f => (
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

      {/* Seção de Exibição */}
      <section className="w-full lg:w-3/4 space-y-4">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-3xl font-extrabold">Oportunidades e Editais</h2>
            <p className="text-sm text-[#a1a1aa] mt-1">
              Mostrando resultados para: <span className="text-[#3ab0ff] font-bold">{filtroAtivo}</span>
            </p>
          </div>
          <span className="text-sm bg-white/10 border border-white/10 px-4 py-1.5 rounded-full font-bold">
            {carregando ? 'Carregando...' : `${todosEditais.length} encontrados`}
          </span>
        </div>

        {carregando ? (
          <div className="text-center p-10 text-white/50">Carregando editais do banco de dados...</div>
        ) : todosEditais.length > 0 ? (
          todosEditais.map(edital => (
            <div key={edital.id} className={`bg-white/5 border transition-all rounded-2xl overflow-hidden ${editalExpandidoId === edital.id ? 'border-[#3ab0ff] bg-white/10' : 'border-white/10 hover:border-[#3ab0ff]/50 hover:bg-white/10'}`}>

              {/* Parte Visível Principal */}
              <div className="p-6 flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] uppercase font-bold bg-[#3ab0ff]/20 text-[#3ab0ff] px-2 py-0.5 rounded">
                      {edital.orgao}
                    </span>
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded flex items-center gap-1 ${edital.status === 'Aberto' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${edital.status === 'Aberto' ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></span> {edital.status}
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
                    {edital.linkSubmissao && (
                      <a 
                        href={edital.linkSubmissao.startsWith('http') ? edital.linkSubmissao : `#`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-green-500 text-black text-sm font-bold rounded-lg hover:bg-green-400 transition-colors inline-block"
                      >
                        Fazer Inscrição ({edital.linkSubmissao})
                      </a>
                    )}
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