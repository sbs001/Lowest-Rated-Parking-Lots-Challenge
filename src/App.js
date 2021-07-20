import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
