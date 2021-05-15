import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from './pages/Home';
import Houses from './pages/Houses';
import Info from './pages/Info';

import {Route, Switch} from 'react-router-dom'
import NavBar from "./Components/NavBar";
function App() {
    return (
        <>
        <NavBar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/houses" component={Houses}/>
        <Route exact path="/info" component={Info}/>
        </>
    );
}
export default App;