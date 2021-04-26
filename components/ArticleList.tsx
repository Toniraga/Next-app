import React from 'react';
import ArticleItem from './ArticleItem';
import articleStyles from '../styles/article.module.css';

export interface IArticle {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface IProps {
    articles: [IArticle];
}

const ArticleList: React.FC<IProps> = ({ articles }) => {
    return (
        <div className={articleStyles.grid}>
           {articles?.map((article: IArticle) => (
              <React.Fragment key={article.id}>
                <ArticleItem article={article} />
              </React.Fragment> 
           ))}
        </div>
    )
}

export default ArticleList;
