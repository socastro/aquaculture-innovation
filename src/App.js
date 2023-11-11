import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import TransmisionView from './TransmitionView';
import NetworksInformation from './NetworkInformation'
import Header from './Header';

function App() {
  return (
    <Router>
      <Header/>
        <Routes style={{margin: "15%"}}>
          <Route exact path='/networks' element={<TransmisionView />}></Route>        
          <Route exact path='/nodes' element={<NetworksInformation name={'Salmonera'}/>}></Route>        
        </Routes>
    </Router>

  );
}

export default App;
