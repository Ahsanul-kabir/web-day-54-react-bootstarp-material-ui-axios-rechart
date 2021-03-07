import './App.css';
import News from './component/News';
import Header from './component/Header/Header';
import TopNews from './component/TopNews/TopNews';


function App() {
  return (
    <div>
      <Header></Header>
      <TopNews></TopNews>
      <News></News>
    </div>
  );
}

export default App;
