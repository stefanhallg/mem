import './App.css';
import react, {useEffect} from 'react'
import Enviroment from './components/Enviroment';
import ConfigValues from './components/ConfigValues';
import Header from './components/Header';
import {getAllConfig} from './actions/envActions';
import {loadMaster} from './actions/masterActions';
import { useDispatch} from 'react-redux';

function App() {
  const dispatch =useDispatch();
  useEffect(() => {
    dispatch(getAllConfig());
    dispatch(loadMaster());
  // Safe to add dispatch to the dependencies array
  }, [dispatch])
  return (
    <div className="container">
     <Enviroment></Enviroment>
     <ConfigValues></ConfigValues>
    </div>
  );
}

export default App;
