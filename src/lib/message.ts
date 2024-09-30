import { ISaveMessage } from "@/types/post";
import { Collection, MongoClient } from "mongodb";

export class MessageService {
  private uri: string | undefined;
  private client: MongoClient;

  constructor() {
    this.uri = process.env.MONGODB_URI;
    if (!this.uri) {
      throw new Error("MongoDB URI is not defined in environment variables.");
    }
    this.client = new MongoClient(this.uri);
  }

  private async connectToDatabase() {
    try {
      await this.client.connect();
      if (process.env.NODE_ENV === "production")
        return this.client.db("dingDB_prod");
      return this.client.db("dingDB");
    } catch (err) {
      console.error("Failed to connect to the database:", err);
      throw new Error("Database connection failed");
    }
  }

  async saveMessage(message: ISaveMessage) {
    try {
      const db = await this.connectToDatabase();
      const collection: Collection = db.collection("messages");
      const savedMessage = await collection.insertOne(message);
      if (savedMessage.acknowledged) {
        return {
          ...savedMessage,
          _id: savedMessage.insertedId,
        };
      }
      throw new Error("Failed to save message");
    } catch (err) {
      console.error(err);
    } finally {
      this.client.close();
    }
  }
}

export const messageService = new MessageService();
