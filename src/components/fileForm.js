import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ReactHowler from 'react-howler';

const FileForm = () => {

  const src = useSelector(state => state);
  console.log(1)
  console.log(src)
  console.log(2)
    // const dispatch = useDispatch();

    // const [howlerState, setHowlerState] = React.useState(false);
    // const howlerRef = React.useRef(0);

    return (
        <div>
            <h1>{src}</h1>
            </div>
    )
}

export default FileForm;