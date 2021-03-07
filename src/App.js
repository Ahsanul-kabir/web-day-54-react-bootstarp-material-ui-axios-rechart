import './App.css';
import Bootstarp from './component/Bootstarp';
import Header from './component/Header/Header';
import TopNews from './component/TopNews/TopNews';
import Button from '@material-ui/core/Button';
import News from './material-ul-component/News'

function App() {
  return (
    <div>
      <Header></Header>
      <TopNews></TopNews>
      {/* <Bootstarp></Bootstarp> */}

      <Button variant="contained" color="primary">Primary</Button>
      <News></News>
    </div>
  );
}

export default App;
