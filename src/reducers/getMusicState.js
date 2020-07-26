const getMusicState = (
  state = {
    playing: false,
    src: encodeURI("\\songs\\Justin Bieber Ft. Poo Bear - Get Used to me.mp3"),
    loop: false,
    duration: 10,
    seek: 0
  },
  action
) => {
  switch (action.type) {
    case "changeSource":
      return {
        ...state,
        playing: true,
        src: encodeURI(
          `\\songs\\${action.payload.artist} - ${action.payload.name}.mp3`
        ),
      };
    case "pauseOrPlay":
      return { ...state, playing: !state.playing };
      case 'play':
      return { ...state, playing: true}
      case 'pause':
      return { ...state, playing: false}
    case "loop":
      return { ...state, loop: true };
    case "endSong":
      return { ...state, playing: false };
    case "getDuration":
      return { ...state, duration: action.payload };
      case "getSeek":
        return {...state, seek: action.payload}
        
    default:
      return state;
  }
};

export default getMusicState;
