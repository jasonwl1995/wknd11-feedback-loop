import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [understanding, setUnderstanding] = useState(1);

  const onNext = (evt) => {
    evt.preventDefault();

    if (understanding === undefined) {
      alert("Please enter a number between 1 and 5");
      return;
    }

    // Saves data to store
    dispatch({
      type: 'UPDATE_UNDERSTANDING',
      payload: understanding
    });

    // Clear input
    setUnderstanding(1);

    // Go to supported Page
    history.push('/review');
  }

  return (
    <>
      <div>
        <h2>How well are you understanding the content?</h2>

        <div> Understanding? </div>

        <input type="number" max="5" min="1" 
                value = {understanding}
                onChange= {(evt) => setUnderstanding(evt.target.value)}
                required 
        />

        <button onClick={onNext}>NEXT</button>
      </div>
    </>
  );
}

export default Understanding;