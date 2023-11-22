import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import TransmisionView from './TransmitionView';
import NodeInformation from './NodeInformation';
import NetworkInformation from './NetworkInformation'
import Header from './Header';
import SensorInformation from './SensorInformation';
import MainView from './MainView';
import { UserProvider } from './UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <Header/>
          <Routes style={{margin: "15%"}}>
            <Route exact path='/' element={<MainView />}></Route>
            <Route path='' element={<PrivateRoute/>}>
              <Route exact path='/networks' element={<TransmisionView />}></Route>        
              <Route exact path='/network/:networkType' element={<NetworkInformation />}></Route>        
              <Route exact path='network/Salmones/node/2299191' element={<SensorInformation/>}></Route>
            </Route>
          </Routes>
      </UserProvider>
    </Router>

  );
}

export default App;
