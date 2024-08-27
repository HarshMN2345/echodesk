"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { buttonVariants } from './ui/buttons';

interface Article {
  title: string;
  summary: string;
  body: string;
  wordcloud_link: string;
}

export function ArticleScrollComponent(): JSX.Element {
  const [articles, setArticles] = useState<Article[]>([]);
  const [showBody, setShowBody] = useState<{ [key: number]: boolean }>({});
  const [showWordCloud, setShowWordCloud] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async (): Promise<void> => {
    try {
      const response = await fetch('/api/article', {
        method: 'GET',
      });
      const data: Article[] = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  if (articles.length === 0) return <div>Loading...</div>;

  return (
    <div className="flex flex-col overflow-hidden">
      {articles.map((article, index) => (
        <div key={index} className="mx-auto max-w-4xl mb-8">
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            {article.title}
          </h1>
          <p className="text-xl mb-4">{article.summary}</p>
          
          <button 
            onClick={() => setShowBody(prev => ({ ...prev, [index]: !prev[index] }))}
            className={buttonVariants({
              size: "lg",
              className: "mt-5",
            })}
          >
            {showBody[index] ? 'Hide Body' : 'View Body'}
          </button>
          
          {showBody[index] && (
            <div className="article-body mb-4">
              {article.body}
            </div>
          )}
          
          <button 
            onClick={() => setShowWordCloud(prev => ({ ...prev, [index]: !prev[index] }))}
            className={buttonVariants({
              size: "lg",
              variant:'ghost',
              className: "mt-5",
            })}
          >
            {showWordCloud[index] ? 'Hide Word Cloud' : 'View Word Cloud'}
          </button>
          
          {showWordCloud[index] && (
            <Image
              src={article.wordcloud_link}
              alt="Word Cloud"
              height={400}
              width={600}
              className="mx-auto rounded-2xl object-cover"
              draggable={false}
            />
          )}
        </div>
      ))}
    </div>
  );
}

