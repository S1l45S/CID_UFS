export const authenticateUser = async (usuario, senha) => {
  try {
    // O Netlify cria automaticamente a rota /.netlify/functions/nome-do-arquivo
    const response = await fetch('/.netlify/functions/login', {
      method: 'POST',
      body: JSON.stringify({ usuario, senha })
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.user; 

  } catch (error) {
    console.error("Erro de comunicação com a função Netlify:", error);
    throw error;
  }
};