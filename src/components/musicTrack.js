import React from 'react';
import { useDispatch } from 'react-redux';

const MusicTrack = (props) => {
	const dispatch = useDispatch();

	const clickTrack = () => {
		dispatch({
			type: 'change-index',
			payload: props.no,
		});
		dispatch({
			type: 'expand-false',
		});
	};
	return (
		<button className="music-track" onClick={clickTrack}>
			<p className="artist">{props.artist}</p>
			<p className="title">{props.name}</p>
		</button>
	);
};

export default MusicTrack;
