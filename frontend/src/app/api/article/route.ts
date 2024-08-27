import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('News_db'); // Replace with your actual database name

    const article = await db.collection('news_articles').find({}).toArray(); // Adjust query as needed

    if (!article) {
      return NextResponse.json({ message: 'Article not found' }, { status: 404 });
    }

    return NextResponse.json(article);
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}