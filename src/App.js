import './App.css';
import Bootstarp from './component/Bootstarp';
import Header from './component/Header/Header';
import TopNews from './component/TopNews/TopNews';
import Button from '@material-ui/core/Button';
import News from './material-ul-component/News'
import { useEffect, useState } from 'react';

// use Recharts Library
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function App() {
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a3f24ac276824971b4f56f5ef295d72f'
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => setArticles(data.articles))
  // }, [])

  const lineChartdata = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>

      <LineChart
        width={500}
        height={300}
        data={lineChartdata}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>






      <Header></Header>
      <TopNews></TopNews>
      {/* <Bootstarp></Bootstarp> */}

      <Button variant="contained" color="primary">Primary</Button>
      {/* <News></News> */}

      {/* <h1>Top Headline: {articles.length}</h1>
      {
        articles.map(article => <News article={article}></News>)
      } */}
    </div>
  );
}

export default App;
