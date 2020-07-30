import React from 'react';
import phonograph from '../images/phongraph.png';
import { useSelector, useDispatch } from 'react-redux';

const spin = {
	animationName: 'spin',
};

const songname= [
	{ name: 'Get Used to me', artist: 'Justin Bieber Ft. Poo Bear' },
	{ name: 'Cold Water', artist: 'Major Lazer' },
]

const VinylRecordComponent = () => {
	const dispatch = useDispatch();
	const currentSongName = `${songname[useSelector((state) => state.index)].artist} - ${songname[useSelector((state) => state.index)].name}`
	return (
		<div
			className="current-song"
			onClick={() =>
				dispatch({
					type: 'expand-false',
				})
			}
		>
			<div className="image-container">
				<img
					src={phonograph}
					alt="phonograph image"
					style={useSelector((state) => state.playing) ? spin : null}
				/>
			</div>
			<p className="current-songname">
				{decodeURI(currentSongName).replace('\\songs\\', '').replace('.mp3', '')}
			</p>
		</div>
	);
};

export default VinylRecordComponent;
