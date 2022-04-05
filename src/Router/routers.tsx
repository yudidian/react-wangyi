import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Found from "../Views/Found/Found";
import Mine from "../Views/Mine/Mine";
import Header from "../Components/Header/header";
import React from "react";


export default function Routers() {
    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/found" component={Found}/>
                    <Route path="/mine" component={Mine}/>
                    <Redirect to="/found" from="/" exact/>
                </Switch>
            </Router>
        </div>
    )
}

