import React, { useState, useRef, useMemo } from "react";
import "nouislider/distribute/nouislider.css";
import { useDispatch, useSelector } from "react-redux";
import InputSlider from "react-input-slider";

let s;

const formatValue = (val) => {
  const min = Math.floor(val / 60);
  const sec = Math.floor(val % 60);

  const addZero = (num) => {
    if (num < 10) return "0" + num;
    else return num.toString();
  };

  return { min: min, sec: addZero(sec) };
};

const MusicControls = (props) => {
  let [trackLevel, setTrackLevel] = useState(0);
  const dispatch = useDispatch();
  const slider = useRef(0)
  const seek = useSelector(state => state.seek)

  const changeSeek=() => {
    // dispatch({type: 'pause'})
    // setTrackLevel(seek)
    console.log('ppp')
  }

  React.useEffect(() => {
    if (props.playing === true && trackLevel !== props.duration) {
      s = setTimeout(() => {
        // setTrackLevel((a) => parseInt(a) + 1);
        setTrackLevel(seek)
        if (trackLevel === Math.floor(props.duration)) {
          
          clearInterval(s);
          setTrackLevel(0);
          dispatch({type: 'endSong'})
        }
        // props.set = trackLevel*100/props.duration
        // incrementTrackLevel();
        // if(props.playing === false)
        // clearInterval(s)
      }, 500);
    } else {
      clearInterval(s);
    }
    return () => clearInterval(s);
  }, [props.playing, trackLevel]);

  React.useEffect(() => {
    setTrackLevel(0)
  }, [props.duration])

  //npm install react-input-slider

  return (
    <>
      <div className="music-controls">
        <div id="track-level">{`${
          formatValue(trackLevel).min
        }:${formatValue(trackLevel).sec}`}</div>
        <form>
          <InputSlider
          axis="x"
          x={trackLevel}
          ref={slider}
            xmax={useSelector((state) => state.duration)}
            xmin={0}
            onChange={changeSeek}
          />
        </form>
        <div id="track-level-max">{`${
          formatValue(useSelector((state) => state.duration)).min
        }:${formatValue(useSelector((state) => state.duration)).sec}`}</div>
        <button onClick={() => dispatch({ type: "pauseOrPlay" })}>Pause</button>
      </div>
    </>
  );
};

// `${formatValue(value[handle]).min}:${
//   formatValue(value[handle]).sec
// }`
// )

export default MusicControls;
