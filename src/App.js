import React, {useState} from 'react';
import './App.css';
import GlobalStyle from "./GlobalStyle";
import Homes from './components/Homes';
import { Route} from "react-router-dom";
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Alom from './components/homefile/Alom';
import David from './components/homefile/David';
import Fatima from './components/homefile/Fatima';
import Mahir from './components/homefile/Mahir';
import Sherri from './components/homefile/Sherri';
import Tuli from './components/homefile/Tuli';
import About from './components/About';
import Contact from './components/Contact';






function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
   <>
 
        <GlobalStyle/>
        <Navbar toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Route exact path="/">
        <Landing/>
        </Route>
    <Route exact path="/Homes">
        <Homes/>
    </Route>

    <Route exact path="/Alom">
    <Alom />

    </Route>
    <Route exact path="/David">
    <David />

    </Route>
    
    <Route exact path="/Fatima">
    <Fatima />

    </Route>

    
    <Route exact path="/Mahir">
    <Mahir/>

    </Route>

    <Route exact path="/Sherri">
    <Sherri/>

    </Route>
    <Route exact path="/Tuli">
    <Tuli/>

    </Route>
    <Route exact path="/About">
    <About/>

    </Route>

    <Route exact path="/Contact">
      <Contact/>
    </Route>
  
   </>
  );
}

export default App;
