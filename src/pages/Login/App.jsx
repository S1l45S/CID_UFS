import { useState } from "react";
// Ajuste o caminho de importação dependendo de onde seu Login.jsx está
import { authenticateUser } from "../../service/api"; 

export default function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setText("");

    try {
      // Usando o service abstraído
      const user = await authenticateUser(usuario, senha);

      if (user) {
        // Sucesso: documento encontrado no banco
        onLogin();
      } else {
        // Falha: documento não encontrado (usuário ou senha errados)
        setText("Usuário ou senha inválidos.");
      }
    } catch (error) {
      setText("Erro de conexão com o servidor.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full font-plusjakarta bg-black overflow-hidden">
      
      {/* SEÇÃO DO FORMULÁRIO (Esquerda) */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 bg-[#001f5c]">
        
        <div className="w-full max-w-sm z-10 p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm shadow-2xl">
          
          <div className="flex flex-col items-center justify-center text-center gap-1 mb-6">
            
            <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl font-extrabold text-white tracking-tighter">ufs</span>
                <div className="h-8 w-px bg-white/40"></div>
                <div className="text-left text-[10px] text-white/80 uppercase font-light tracking-wide leading-tight">
                    Universidade<br />Federal de<br />Sergipe
                </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl mb-1 font-extrabold tracking-tight text-white">
              CID
            </h1>
            
            <p className="text-[#a1a1aa] text-xs md:text-sm leading-relaxed px-2">
              Central de Informação Discente. <br/>
              <span className="text-white/90 font-medium">Acesse com suas credenciais do SIGAA.</span>
            </p>
          </div>

          <form onSubmit={handleLogin}>
            {text && (
              <p className="text-[#ff4d4d] mb-3 font-semibold text-center text-sm">
                {text}
              </p>
            )}
            
            <div className="mb-4">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#3ab0ff] mb-1.5">
                Usuário SIGAA
              </label>
              <input 
                type="text" 
                onChange={(e) => {
                  setUsuario(e.target.value);
                  setText("");
                }} 
                required 
                placeholder="Seu usuário do SIGAA" 
                className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl text-white text-sm outline-none focus:border-[#3ab0ff] focus:bg-white/10 focus:ring-2 focus:ring-[#3ab0ff]/20 transition-all duration-300"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#3ab0ff] mb-1.5">
                Senha
              </label>
              <input 
                type="password" 
                onChange={(e) => {
                  setSenha(e.target.value);
                  setText("");
                }} 
                required 
                placeholder="••••••••" 
                className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl text-white text-sm outline-none focus:border-[#3ab0ff] focus:bg-white/10 focus:ring-2 focus:ring-[#3ab0ff]/20 transition-all duration-300"
              />
            </div>
            
            <button
              type="submit"
              className="w-full p-3.5 bg-gradient-to-br from-[#3ab0ff] to-[#0052cc] border-none rounded-xl text-white text-sm font-extrabold cursor-pointer transition-all duration-300 uppercase tracking-widest hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3ab0ff]/30 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              disabled={isLoading}
            >
              {isLoading ? "Autenticando..." : "Entrar no Sistema"}
            </button>
          </form>
          
          <div className="mt-6 pt-5 border-t border-white/10 text-center">
             <p className="text-[11px] text-[#a1a1aa] leading-relaxed">
               O acesso a esta plataforma é restrito à comunidade acadêmica. <br/>Dúvidas? Consulte a <a href="#" className="text-[#3ab0ff] hover:underline">Assistência Estudantil</a>.
             </p>
          </div>
        </div>
      </div>
      
      {/* SEÇÃO DA IMAGEM (Direita) */}
      <div
        className="hidden lg:flex flex-[1.1] bg-cover bg-center relative top-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f5c] via-[#001f5c]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#001f5c] via-transparent to-transparent opacity-90"></div>
        
        <div className="z-10 p-12 max-w-lg mt-55 mb-10 ml-8">
          <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
            Direitos, auxílios e oportunidades centralizados para você.
          </h2>
          <div className="h-1.5 w-20 bg-[#3ab0ff] rounded-full mt-5 shadow-[0_0_15px_rgba(58,176,255,0.6)]"></div>
        </div>
      </div>
    </div>
  );
}