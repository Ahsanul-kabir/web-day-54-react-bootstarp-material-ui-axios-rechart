import React, { useEffect, useState } from 'react';

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
        </div>
    );
};
export default TopNews;