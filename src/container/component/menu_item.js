import React from 'react'
import './menu_item.css';
import {Link} from "react-router-dom";

const MenuItem = ({Icon, title, to}) => {
    return (
        <Link to={to} className="sidebarRow">
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </Link>
    )
}

export default MenuItem
