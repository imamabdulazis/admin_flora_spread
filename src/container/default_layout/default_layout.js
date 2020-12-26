import React, {Component} from 'react';
import './default_layout.css';
import NavBar from "./nav_bar";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Sidebar from "./side_bar";
import Dashboard from "../page/dashboard";
import Conservation from "../page/conservation";
import Flora from "../page/flora";
import Spread from "../page/spread";
import Feedback from "../page/feedback";
import Category from "../page/category";

const DefaultLayout = () => {
    return (
        <Router>
            <div className={"app"}>
                <NavBar title_bar={"Penyebaran Flora"}/>
                <div className={"app__body"}>
                    <Sidebar/>
                    <div className={"app__body__main"}>
                        <Route exact path={"/"} component={Dashboard}/>
                        <Route path={"/conservation"} component={Conservation}/>
                        <Route path={"/flora"} component={Flora}/>
                        <Route path={"/category"} component={Category}/>
                        <Route path={"/spread"} component={Spread}/>
                        <Route path={"/feedback"} component={Feedback}/>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default DefaultLayout;