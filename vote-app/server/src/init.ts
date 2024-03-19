import { MongoClient, Db } from 'mongodb';

let mongoClient: MongoClient;
let db: Db;

async function initDb() {
    const uri = process.env.MONGO_CONNECTION_STRING;
    mongoClient = new MongoClient(uri);
    try {
        db = mongoClient.db(process.env.DATABASE);
    } catch (error) {
        await mongoClient.close();
        throw error;
    }
}

export default async function initialise() {
    await initDb();
}

export { db }