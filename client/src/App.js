import './App.css';
import react, {useEffect} from 'react'
import Groups from './components/Groups';
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
     <Groups></Groups>
     <ConfigValues></ConfigValues>
    </div>
  );
}

export default App;
