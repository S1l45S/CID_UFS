import React from 'react';
import { useAuth } from '../../context/AuthContext';

const CategoryCard = ({ title, bgImage, colorGradient, linkText }) => (
  <div className="relative overflow-hidden rounded-2xl h-64 group cursor-pointer shadow-lg">
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>
    <div className={`absolute inset-0 bg-gradient-to-br ${colorGradient} mix-blend-multiply opacity-90`}></div>
    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent`}></div>

    <div className="absolute inset-0 p-6 flex flex-col justify-between">
      <h3 className="text-2xl font-extrabold text-white tracking-tight drop-shadow-md z-10">{title}</h3>
      <button className="self-start px-4 py-2 bg-[#3ab0ff] text-black text-sm font-bold rounded-full flex items-center gap-2 hover:bg-white transition-colors z-10 shadow-lg">
        <span>&gt;</span> {linkText}
      </button>
    </div>
  </div>
);

export default function Dashboard() {
  const { user, logout } = useAuth();

  const primeiroNome = user.nome.trim().split(/\s+/)[0];

  return (
    <div className="space-y-12">
      {/* Banner de Boas-vindas */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{`Bem-vindo à CID, ${primeiroNome}.`}</h1>
        <p className="text-[#a1a1aa] max-w-2xl mb-6">
          Sua Central de Informação Discente. Você tem <span className="text-[#3ab0ff] font-bold">2 prazos importantes</span> terminando nesta semana. Não dependa do "boca a boca", acompanhe seus direitos aqui.
        </p>
      </div>

      {/* Seção 1: Assistência Estudantil (Prioridade do PDI) */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Assistência Estudantil (PROEST)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard
            title="Auxílio Moradia"
            bgImage="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=500"
            colorGradient="from-blue-600 to-cyan-400"
            linkText="Ver Editais Abertos"
          />
          <CategoryCard
            title="Auxílio Alimentação"
            bgImage="https://images.unsplash.com/photo-1543352634-99a5d50ae78e?q=80&w=500"
            colorGradient="from-blue-500 to-indigo-600"
            linkText="Consultar Status"
          />
          <CategoryCard
            title="Apoio Pedagógico"
            bgImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=500"
            colorGradient="from-cyan-500 to-blue-700"
            linkText="Solicitar Tutoria"
          />
        </div>
      </section>

      {/* Seção 2: Pesquisa, Extensão e Oportunidades */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Pesquisa, Inovação e Extensão</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard
            title="Bolsas PIBIC / PIBITI"
            bgImage="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=500"
            colorGradient="from-green-500 to-emerald-700"
            linkText="Iniciação Científica"
          />
          <CategoryCard
            title="Ligas Acadêmicas"
            bgImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500"
            colorGradient="from-purple-500 to-fuchsia-700"
            linkText="Ver Inscrições"
          />
          <CategoryCard
            title="Projetos de Extensão"
            bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500"
            colorGradient="from-orange-500 to-red-600"
            linkText="Participar"
          />
        </div>
      </section>
    </div>
  );
}