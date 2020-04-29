import React from "react";
import "./App.css";
import Heading from "./components/header";
import VinylRecord from "./components/vinylRecordComponent";
import MusicControls from "./components/musicControls";
import MusicList from "./components/musicList";
import FileForm from "./components/fileForm";
import Sound from './components/Sound';
import {useSelector} from 'react-redux';

const songNames = [
  {name: 'Get Used to me', artist: 'Justin Bieber Ft. Poo Bear'},
  {name: 'Cold Water', artist: 'Major Lazer'},
]


function App() {

  return (
    <>
      {/* <Heading /> */}-
      {/* <VinylRecord /> */}
      <MusicControls playing={useSelector(state => state.playing)} duration={useSelector(state => state.duration)} set={0}/>
      <MusicList songList={songNames}/>
      <Sound/>
      {/* <FileForm/> */}
    </>
  );
}

export default App;
