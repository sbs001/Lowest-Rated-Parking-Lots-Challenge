import { useDispatch } from 'react-redux';
import './App.css';
import { getParkingLotsByLocation } from './redux/actions/actions';

function App() {

  const a = useDispatch();

  a(getParkingLotsByLocation('miami'));
  
  return (
    <div className="App">
     asd

     
    </div>
  );
}

export default App;
