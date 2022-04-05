import Header from "./header/Header";
import {Redirect, Route} from "react-router-dom";
import Recommend from "./Discover/recommend";
import Tops from "./Discover/Top/Top";

export default function Found() {
    return (
        <div>
            <Header/>
            <Route path="/found/recommend" component={Recommend}/>
            <Route path="/found/tops" component={Tops}/>
            <Redirect to="/found/recommend" from="/found"/>
        </div>
    );
};
