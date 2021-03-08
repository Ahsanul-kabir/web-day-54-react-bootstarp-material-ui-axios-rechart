import './App.css';
import Bootstarp from './component/Bootstarp';
import Header from './component/Header/Header';
import TopNews from './component/TopNews/TopNews';
import Button from '@material-ui/core/Button';
import News from './material-ul-component/News'
import { useEffect, useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a3f24ac276824971b4f56f5ef295d72f'
    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
  }, [])

  return (
    <div>
      <Header></Header>
      <TopNews></TopNews>
      {/* <Bootstarp></Bootstarp> */}

      <Button variant="contained" color="primary">Primary</Button>
      <News></News>

      <h1>Top Headline: {articles.length}</h1>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
