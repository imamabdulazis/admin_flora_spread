import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import MapIcon from '@material-ui/icons/Map';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import FeedbackIcon from '@material-ui/icons/Feedback';
import './side_bar.css';
import MenuItem from "../component/menu_item";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <MenuItem to={'/'} Icon={HomeIcon} title="Home"/>
            <MenuItem to={'/conservation'} Icon={AccountTreeIcon} title="Area Konservasi"/>
            <MenuItem to={'/flora'} Icon={AcUnitIcon} title="Flora"/>
            <MenuItem to={'/category'} Icon={CardMembershipIcon} title="Kategori"/>
            <MenuItem to={'/spread'} Icon={MapIcon} title="Penyebaran"/>
            <MenuItem to={'/feedback'} Icon={FeedbackIcon} title="Feedback"/>
        </div>
    )
}

export default Sidebar
