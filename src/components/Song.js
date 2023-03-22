import React from "react";
import classes from './Song.css';

const Song = (props) => {
    return (
        <li className="song">
            <h2>{props.title}</h2>
        </li>
    );
};

export default Song;