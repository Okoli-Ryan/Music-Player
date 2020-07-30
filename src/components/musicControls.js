import React, { useState, useRef } from 'react';
import 'nouislider/distribute/nouislider.css';
import { useDispatch, useSelector } from 'react-redux';
import InputSlider from 'react-input-slider';
import ReactHowler from 'react-howler';
import Controls from './musicControlsButtonContainer';
let s;

const songnames = [
	encodeURI(`\\songs\\Justin Bieber Ft. Poo Bear - Get Used to me.mp3`),
	encodeURI(`\\songs\\Major Lazer - Cold Water.mp3`),
];

const formatValue = (val) => {
	const min = Math.floor(val / 60);
	const sec = Math.floor(val % 60);

	const addZero = (num) => {
		if (num < 10) return '0' + num;
		else return num.toString();
	};

	return { min: isNaN(min) ? '0' : min, sec: isNaN(sec) ? '00' : addZero(sec) };
};

const MusicControls = (props) => {
	let [trackLevel, setTrackLevel] = useState(0);
	const dispatch = useDispatch();
	const howl = useRef(0);

	// const changeSeekSound = useCallback(() => {
	// 	console.log('r');
	// 	clearInterval(s);
	// 	s = setInterval(() => {
	// 		dispatch({ type: 'getSeek', payload: Math.floor(howl.current.seek()) });
	// 		if (howl.current.seek() === howl.current.duration()) clearInterval(s);
	// 	}, 1000);
	// }, [dispatch]);

	const stopSeek = () => {
		clearTimeout(s);
	};

	const onDragStart = () => {
		clearTimeout(s);
		dispatch({ type: 'pause' });
	};

	const onLoad = () => {
		dispatch({ type: 'getDuration', payload: howl.current.duration() });
	};

	const changeSeek = ({ x }) => {
		clearTimeout(s);
		howl.current.seek(x);
		setTrackLevel(x);
	};

	const onEnd = () => {
		dispatch({ type: 'pause' });
		setTrackLevel(0);
	};

	React.useEffect(() => {
		if (props.playing === true) {
			s = setTimeout(() => {
				setTrackLevel(howl.current.seek());
			}, 850);
		} else {
			clearTimeout(s);
		}
		// return () => clearInterval(s);
	}, [props.playing, trackLevel, props.index]);

	React.useEffect(() => {
		setTrackLevel(0);
	}, [props.duration]);

	//npm install react-input-slider

	return (
		<>
			<div
				className="music-controls"
				onClick={() =>
					dispatch({
						type: 'expand-false',
					})
				}
			>
				<Controls index={useSelector((state) => state.index)} playing={useSelector((state) => state.playing)} />
				<div className="slider-area">
					<div id="track-level">
						{`${formatValue(trackLevel).min}
          :
          ${formatValue(trackLevel).sec}`}
					</div>
					<InputSlider
						styles={{
							active: {
								backgroundColor: 'black',
							},
						}}
						axis="x"
						x={trackLevel}
						xmax={useSelector((state) => state.duration)}
						xmin={0}
						onChange={changeSeek}
						onDragStart={onDragStart}
					/>
					<div id="track-level-max">
						{`${formatValue(useSelector((state) => state.duration)).min}
          :
          ${formatValue(useSelector((state) => state.duration)).sec}`}
					</div>
				</div>
				<ReactHowler
					src={songnames[useSelector((state) => state.index)]}
					preload={true}
					onLoad={onLoad}
					ref={howl}
					onEnd={onEnd}
					playing={props.playing}
					html5={true}
					format={['.mp3']}
					onPause={stopSeek}
					style={{ position: 'fixed' }}
				/>
			</div>
		</>
	);
};

export default MusicControls;
