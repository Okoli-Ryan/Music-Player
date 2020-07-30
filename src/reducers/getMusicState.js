const getMusicState = (
	state = {
		playing: false,
		src: encodeURI('\\songs\\Justin Bieber Ft. Poo Bear - Get Used to me.mp3'),
		loop: false,
		index: 0,
		duration: 228,
		songname: [
			{ name: 'Get Used to me', artist: 'Justin Bieber Ft. Poo Bear' },
			{ name: 'Cold Water', artist: 'Major Lazer' },
		],
		expand: false,
	},
	action
) => {
	switch (action.type) {
		// case 'changeSource':
		// 	return {
		// 		...state,
		// 		playing: true,
		// 		src: encodeURI(`\\songs\\${action.payload.artist} - ${action.payload.name}.mp3`),
		// 	};
		case 'toggle-play':
			return { ...state, playing: !state.playing };
		case 'play':
			return { ...state, playing: true };
		case 'pause':
			return { ...state, playing: false };
		case 'loop':
			return { ...state, loop: !state.loop };
		case 'endSong':
			return { ...state, playing: false };
		case 'getDuration':
			return { ...state, duration: action.payload };
		case 'next':
			return { ...state, index: (state.index + 1) % state.songname.length, playing: true, };
		case 'previous':
			return { ...state, index: (state.index - 1 + state.songname.length) % state.songname.length, playing: true,  };
		case 'change-index':
			return { ...state, playing: true, index: action.payload };
		case 'expand-true':
			return { ...state, expand: true };
		case 'expand-false':
			return { ...state, expand: false };
		case 'expand-toggle':
			return { ...state, expand: !state.expand };
		default:
			return state;
	}
};

export default getMusicState;
