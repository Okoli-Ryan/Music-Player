import React, { useState } from 'react';
import MusicTrack from './musicTrack';
import { useSelector, useDispatch } from 'react-redux';

const expandTrue = {
	marginLeft: '250px',
};

const expandFalse = {
	marginLeft: 0,
};

const MusicList = (props) => {
	const dispatch = useDispatch();
	const expand = useSelector((state) => state.expand);
	return (
		<>
			<div className="music-list" style={expand ? expandTrue : expandFalse}>
				{props.songList.map((song, index) => (
					<MusicTrack key={index} name={song.name} artist={song.artist} no={index} />
				))}
			</div>
			<div
				className="expand-container"
				style={expand ? expandTrue : expandFalse}
				onClick={() => dispatch({ type: 'expand-toggle' })}
			>
				<div className="expand"></div>
			</div>
		</>
	);
};

export default MusicList;
