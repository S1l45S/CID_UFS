import { MongoClient } from 'mongodb';
import jwt from 'jsonwebtoken';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const JWT_SECRET = process.env.JWT_SECRET
export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Método não permitido" };
  }

  try {
    const { usuario, senha } = JSON.parse(event.body);

    await client.connect();
    const database = client.db('cid_db');
    const collection = database.collection('usuarios');

   
    const user = await collection.findOne({ usuario: usuario, senha: senha });

    if (user) {
      
      const token = jwt.sign(
        { 
          id: user._id, 
          nome: user.nome, 
          usuario: user.usuario 
        },
        JWT_SECRET,
        { expiresIn: '24h' } 
      );

      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, token: token })
      };
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ success: false, message: "Credenciais inválidas" })
      };
    }
  } catch (error) {
    console.error("ERRO:", error);
    return { statusCode: 500, body: JSON.stringify({ error: "Erro interno" }) };
  } finally {
    await client.close();
  }
};
