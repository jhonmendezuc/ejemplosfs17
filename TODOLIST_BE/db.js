import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

class DataAccess {
  constructor() {
    const dbName = process.env.DATA_BASE_NAME;
    const dbUrl = process.env.DATA_BASE_URL;
    this.client = new MongoClient(dbUrl);
    this.db = this.client.db(dbName);
  }

  async connect() {
    try {
      this.connection = await this.client.connect();
      console.log("Conexión exitosa a la base de datos");
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error);
    }
  }

  async findAll(collecionName) {
    const collecion = this.db.collection(collecionName);
    const data = await collecion.find().toArray();
    return data;
  }

  async insertOne(collecionName, body) {
    const collecion = this.db.collection(collecionName);
    const data = await collecion.insertOne(body);
    return data;
  }

  async findByName(collecionName, name) {
    const collecion = this.db.collection(collecionName);
    const data = await collecion.findOne({ name });

    return data;
  }

  updateOne() {}

  deleteOne() {}
}

export default DataAccess;
