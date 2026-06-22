import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || "mongodb+srv://cid_db:0T41jLeiSWAp9LPX@cluster0.xmdc6fu.mongodb.net/?appName=Cluster0"; 
const client = new MongoClient(uri);

export const handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Método não permitido" };
  }

  try {
    const body = JSON.parse(event.body);
    const { usuario, senha } = body;

    await client.connect();
    const database = client.db('cid_db');
    const collection = database.collection('usuarios');

    const user = await collection.findOne({ usuario: usuario, senha: senha });

    if (user) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, user: user })
      };
    } else {
      return {
        statusCode: 401,
        body: JSON.stringify({ success: false, message: "Credenciais inválidas" })
      };
    }
  } catch (error) {
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: "Erro interno no servidor" }) 
    };
  } finally {
    await client.close();
  }
};