import { MongoClient } from 'mongodb';
require('dotenv').config();
const uri = process.env.MONGODB_URI as string;
const options = {};

// Initialize the MongoClient
const client = new MongoClient(uri, options);
const clientPromise = client.connect();

export default clientPromise;