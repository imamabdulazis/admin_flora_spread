import React, {Component} from 'react';
import styles from './content.css';
import CollapsibleTable from "./table";

const Content = (props) => {
    return (
        <div>
            <h5>{props.title}</h5>
            <div className="content">
                <CollapsibleTable/>
            </div>
        </div>
    );
}

export default Content;