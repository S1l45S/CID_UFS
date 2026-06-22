import React from 'react';
import { useAuth } from '../../context/AuthContext';

const CategoryCard = ({ title, bgImage, colorGradient, linkText, onClick }) => (
  <div onClick={onClick} className="relative overflow-hidden rounded-2xl h-64 group cursor-pointer shadow-lg transition-transform hover:-translate-y-1">
    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${bgImage})` }}></div>
    <div className={`absolute inset-0 bg-gradient-to-br ${colorGradient} mix-blend-multiply opacity-90`}></div>
    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent`}></div>

    <div className="absolute inset-0 p-6 flex flex-col justify-between">
      <h3 className="text-2xl font-extrabold text-white tracking-tight drop-shadow-md z-10">{title}</h3>
      <button className="self-start px-4 py-2 bg-[#3ab0ff] text-black text-sm font-bold rounded-full flex items-center gap-2 transition-colors z-10 shadow-lg group-hover:bg-white">
        <span>&gt;</span> {linkText}
      </button>
    </div>
  </div>
);

export default function Dashboard({ navegarPara }) {
  const { user } = useAuth();
  const primeiroNome = user?.nome ? user.nome.trim().split(/\s+/)[0] : "Aluno";

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{`Bem-vindo à CID, ${primeiroNome}.`}</h1>
        <p className="text-[#a1a1aa] max-w-2xl mb-6">
          Não dependa do "boca a boca". Entenda seus direitos e acompanhe os prazos de forma unificada.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Assistência Estudantil (PROEST)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard
            title="Auxílio Moradia"
            bgImage="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=500"
            colorGradient="from-blue-600 to-cyan-400"
            linkText="Entenda como funciona"
            onClick={() => navegarPara('explicacao', {
              titulo: 'Auxílio Moradia',
              setor: 'PROEST',
              filtro: 'Auxílio',
              bgImage: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1080',
              colorGradient: 'from-blue-600 to-cyan-400',
              oQueE: 'Um suporte financeiro destinado a estudantes em situação de vulnerabilidade socioeconômica, oriundos de outros municípios ou estados, para ajudar a custear despesas com aluguel enquanto estudam.',
              passos: [
                'Estar regularmente matriculado em um curso de graduação presencial.',
                'Realizar ou atualizar o Cadastro Único (CadÚnico) e o cadastro socioeconômico no SIGAA.',
                'Aguardar a publicação do edital da PROEST e enviar as comprovações de renda e residência.'
              ]
            })}
          />
          <CategoryCard
            title="Auxílio Alimentação"
            bgImage="https://images.unsplash.com/photo-1543352634-99a5d50ae78e?q=80&w=500"
            colorGradient="from-blue-500 to-indigo-600"
            linkText="Entenda como funciona"
            onClick={() => navegarPara('explicacao', {
              titulo: 'Auxílio Alimentação',
              setor: 'RESUN / PROEST',
              filtro: 'Auxílio',
              bgImage: 'https://images.unsplash.com/photo-1543352634-99a5d50ae78e?q=80&w=1080',
              colorGradient: 'from-blue-500 to-indigo-600',
              oQueE: 'Acesso subsidiado ou gratuito às refeições no Restaurante Universitário (RESUN), garantindo a segurança alimentar e nutricional para estudantes durante o período letivo.',
              passos: [
                'Ter a matrícula ativa.',
                'Comprovar vulnerabilidade socioeconômica pelo SIGAA (para gratuidade total).',
                'Solicitar a carteirinha institucional para acesso às catracas do RESUN.'
              ]
            })}
          />
          <CategoryCard
            title="Apoio Pedagógico"
            bgImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=500"
            colorGradient="from-cyan-500 to-blue-700"
            linkText="Entenda como funciona"
            onClick={() => navegarPara('explicacao', {
              titulo: 'Apoio Pedagógico',
              setor: 'TUTORIA',
              filtro: 'Apoio',
              bgImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1080',
              colorGradient: 'from-cyan-500 to-blue-700',
              oQueE: 'Iniciativas para combater a reprovação e evasão, oferecendo monitorias, tutorias de nivelamento (ex: matemática e programação) e apoio psicopedagógico para estudantes.',
              passos: [
                'Identificar a disciplina ou área em que você apresenta dificuldades.',
                'Verificar a oferta de monitorias e oficinas disponibilizadas pelos departamentos.',
                'Inscrever-se nos editais de nivelamento divulgados ao início de cada semestre.'
              ]
            })}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Pesquisa, Inovação e Extensão</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard
            title="Bolsas PIBIC / PIBITI"
            bgImage="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=500"
            colorGradient="from-green-500 to-emerald-700"
            linkText="Entenda como funciona"
            onClick={() => navegarPara('explicacao', {
              titulo: 'Bolsas PIBIC / PIBITI',
              setor: 'PESQUISA E INOVAÇÃO',
              filtro: 'Pesquisa',
              bgImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1080',
              colorGradient: 'from-green-500 to-emerald-700',
              oQueE: 'Programas de Iniciação Científica (PIBIC) e Desenvolvimento Tecnológico e Inovação (PIBITI) para inserir o estudante no meio científico, geralmente associado a uma bolsa financeira.',
              passos: [
                'Encontrar um professor pesquisador disposto a orientar um projeto na sua área de interesse.',
                'Elaborar um plano de trabalho junto ao orientador.',
                'Submeter o projeto quando a universidade lançar a chamada pública anual.'
              ]
            })}
          />
          <CategoryCard
            title="Ligas Acadêmicas"
            bgImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500"
            colorGradient="from-purple-500 to-fuchsia-700"
            linkText="Entenda como funciona"
            onClick={() => navegarPara('explicacao', {
              titulo: 'Ligas Acadêmicas',
              setor: 'ASSOCIAÇÕES',
              filtro: 'Extensão',
              bgImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1080',
              colorGradient: 'from-purple-500 to-fuchsia-700',
              oQueE: 'Organizações estudantis autônomas focadas no aprofundamento prático e teórico de temas específicos (como robótica, saúde, engenharias) que não são totalmente cobertos na sala de aula.',
              passos: [
                'Descobrir quais ligas estão ativas no seu departamento ou campus.',
                'Acompanhar o período letivo para o lançamento dos editais de seleção de novos ligantes.',
                'Passar pelas avaliações ou entrevistas definidas por cada liga.'
              ]
            })}
          />
          <CategoryCard
            title="Projetos de Extensão"
            bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500"
            colorGradient="from-orange-500 to-red-600"
            linkText="Entenda como funciona"
            onClick={() => navegarPara('explicacao', {
              titulo: 'Projetos de Extensão',
              setor: 'COMUNIDADE',
              filtro: 'Extensão',
              bgImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1080',
              colorGradient: 'from-orange-500 to-red-600',
              oQueE: 'Ações que levam o conhecimento produzido na universidade para a sociedade. Participar rende certificados, horas complementares e, muitas vezes, bolsa remunerada.',
              passos: [
                'Consultar as pró-reitorias de extensão sobre projetos aprovados e vigentes.',
                'Entrar em contato com o coordenador do projeto (professor responsável).',
                'Participar do processo seletivo para voluntário ou bolsista.'
              ]
            })}
          />
        </div>
      </section>
    </div>
  );
}