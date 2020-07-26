import React from "react";
import MusicTrack from "./musicTrack";

const musicList = (props) => {
  return (
    <div className="music-list">
      {props.songList.map((song, index) => (
        <MusicTrack key={index} name={song.name} artist={song.artist} />
      ))}
    </div>
  );
};

export default musicList;
