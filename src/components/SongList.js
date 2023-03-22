import React from "react";
import classes from './SongList.css';
import Song from "./Song";

const SongList = (props) => {
    return (
        <ul className="song-list">
            {props.songs.map( (song) => (
               <Song key={song.id} title={song.name}></Song>
            ) )  }
        </ul>
    );
};

export default SongList;