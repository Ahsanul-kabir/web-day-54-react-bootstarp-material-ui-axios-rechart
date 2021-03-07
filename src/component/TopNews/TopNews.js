import React, { useEffect, useState } from 'react';
import Bootstarp from '../Bootstarp';

const TopNews = () => {
    const [articles,setArticles] = useState([]);
    useEffect(()=>{
        const url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=a3f24ac276824971b4f56f5ef295d72f'
        fetch(url)
        .then(res => res.json())
        .then(data =>setArticles(data.articles))
    },[])
    return (
        <div>
            <h1>Top Headline: {articles.length}</h1>
            {
                articles.map(article=> <Bootstarp article={article}></Bootstarp>)
            }
        </div>
    );
};
export default TopNews;