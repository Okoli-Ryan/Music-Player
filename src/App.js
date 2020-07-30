import React from "react";
import "./App.css";
import Heading from "./components/header";
import VinylRecord from "./components/vinylRecordComponent";
import MusicControls from "./components/musicControls";
import MusicList from "./components/musicList";
import {useSelector} from 'react-redux';

function App() {

  return (
    <>
      <Heading />
      <VinylRecord />
      <MusicControls playing={useSelector(state => state.playing)} duration={useSelector(state => state.duration)} index = {useSelector(state => state.index)}/>
      <MusicList songList={useSelector(state => state.songname)}/>
    </>
  );
}

export default App;
