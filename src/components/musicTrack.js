import React from 'react';
import {useDispatch} from 'react-redux';

const MusicTrack = (props) => {

    const dispatch = useDispatch();
    return (
        <button className="music-track" onClick={() => dispatch({
            type: 'changeSource', payload: {artist: props.artist, name: props.name}
        })}>
            <p className='artist'>{props.artist}</p>
            <p className='title'>{props.name}</p>
        </button>
    )
}

export default MusicTrack;