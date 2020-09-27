import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

    //BEM naming convention

    return(
        <div className="app">
            {/* <h1>Welcome to Whatsapp</h1> */}
            <div className="app__body">
            <Router>
                <Switch>
                    {/* Sidebar */}
                    <Sidebar />
                    <Route path="/rooms/:roomId">
                        {/* chat */}
                        <Chat />
                    </Route>
                    <Route path="/">
                        <h1>Home Screen</h1>
                    </Route>
                </Switch>
            </Router>
            </div>
        </div>
    );
}

export default App