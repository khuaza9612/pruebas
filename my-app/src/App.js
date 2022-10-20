import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { Switch, Route } from "react-router-dom";


import Fondo from './components/home.jsx';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Switch>
            
            
            <Route exact path="/" component={Fondo} />

            </Switch>
    </div>
    </BrowserRouter>

      
    
  );
}

export default App;
