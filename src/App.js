import React,{useState, useEffect} from "react";
import './App.css';
import SongList from "./components/SongList"

const URL_USERS = "https://jsonplaceholder.typicode.com/users";

//http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=cher&api_key=YOUR_API_KEY&format=json


const LAST_FM_BASE_URL = "http://ws.audioscrobbler.com/2.0/";
const LAST_FM_API_KEY = "a7819bdd931ea91e41d4d496c3f99b3e";
const LAST_FM_GET_TRACKS_METHOD = "artist.gettoptracks";
const LAST_FM_ARTIST = "madonna";
const LAST_FM_FORMAT = "json";


function App() {

  const url = new URL(LAST_FM_BASE_URL);
  const params = {
    method: LAST_FM_GET_TRACKS_METHOD,
    api_key: LAST_FM_API_KEY,
    artist: LAST_FM_ARTIST,
    format: LAST_FM_FORMAT
  };

  for (let key in params){
    url.searchParams.append(key, params[key]);
  };

  const [songs, setSongs] = useState([]);

  const handleFetch = (url) => {
    fetch(url)
    .then( (response) => response.json())
    .then( (data) => {
      console.log(data);
      const tempSongs = data.toptracks.track.map( (element) => {
        return { 
          id: element.mbid,
          name: element.name
        }
      });
      setSongs(tempSongs);
    })
    .catch( (onError) => {
      console.log(onError.message());
      throw onError;
    });
  }

  useEffect ( () => {
    handleFetch(url);
  }, [])
  


  return (
    <div>
        <SongList songs={songs}></SongList>
    </div>
  );
}

export default App;
