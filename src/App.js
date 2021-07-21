import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Results from './Components/Results/Results';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/search" component={Results} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
