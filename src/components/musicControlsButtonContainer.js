import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import play from '../images/play.png';
import pause from '../images/pause.png';

const playPauseStyle = {
	play: { backgroundImage: `url("${play}")` },
	pause: { backgroundImage: `url("${pause}")` },
};

const MusicControlsButtonContainer = (props) => {
	const dispatch = useDispatch();
	return useMemo(() => {
		return (
			<div className="control-area">
				<button className="previous" onClick={() => dispatch({ type: 'previous' })}></button>
				<button
					className="play-pause"
					style={props.playing ? playPauseStyle.pause : playPauseStyle.play}
					onClick={() => dispatch({ type: 'toggle-play' })}
				></button>
				<button className="next" onClick={() => dispatch({ type: 'next' })}></button>
			</div>
		);
	}, [props.playing]);

};

export default MusicControlsButtonContainer;
