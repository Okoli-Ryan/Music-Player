import React, { useRef, useEffect, useState, useCallback } from 'react';
import ReactHowler from 'react-howler';
import { useSelector, useDispatch } from 'react-redux';

let s;

const Sound = (props) => {
	const dispatch = useDispatch();
	const howl = useRef(0);

	const changeSeekSound = useCallback(() => {
		console.log('r');
		clearInterval(s);
		s = setInterval(() => {
			dispatch({ type: 'getSeek', payload: Math.floor(howl.current.seek()) });
			if (howl.current.seek() === howl.current.duration()) clearInterval(s);
		}, 1000);
	}, [dispatch]);

	const stopSeek = () => {
		clearInterval(s);
	};

	const onLoad = () => {
		dispatch({ type: 'getDuration', payload: howl.current.duration() });
	};

	return (
		<>
			<ReactHowler
				src={useSelector((state) => state.src)}
				preload={true}
				onLoad={onLoad}
				ref={howl}
				// onPlay={() => dispatch({type: 'getDuration', payload: howl.current.duration()})}
				onPlay={changeSeekSound}
				playing={props.playing}
				html5={true}
				format={['.mp3']}
				onPause={stopSeek}
			/>
		</>
	);
};

//Sound.js doesnt re-render all the time, so u should move it to a diff place and use the props

export default Sound;
