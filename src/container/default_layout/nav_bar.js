import React, {Component} from 'react';
import './nav_bar.css';
import SearchIcon from '@material-ui/icons/Search';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar, IconButton} from '@material-ui/core';

const NavBar = (props) => {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <img src="https://bksdajogja.org/cni-content/uploads/modules/siteconfig/thumbs/large/20170830013425.png"
                     alt=""/>
                <div className="navbar__input">
                    <SearchIcon/>
                    <input placeholder={"cari flora"}/>
                </div>
            </div>

            <div className="navbar__center">
               <h1>{props.title_bar}</h1>
            </div>

            <div className="navbar__right">
                <div className="navbar__info">
                    <Avatar/>
                    <h4>LOMBOK IJO</h4>
                </div>

                <IconButton style={{backgroundColor: '#eff2f5'}}>
                    <ForumIcon/>
                </IconButton>
                <IconButton style={{backgroundColor: '#eff2f5'}}>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton style={{backgroundColor: '#eff2f5'}}>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    );
}

export default NavBar;