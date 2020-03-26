import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Jion from './components/Join/Jion';
import Chat from './components/Chat/Chat';

const App = ()=>(
    <Router>
    <Route path="/" exact component={Jion}/>
    <Route path="/chat" component={Chat}/>
    </Router>
)
export default App;