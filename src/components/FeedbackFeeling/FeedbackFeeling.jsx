import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feelings() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [feeling, setFeeling] = useState(1);

  const onNext = (evt) => {
    evt.preventDefault();

    // if input 'require' action works, do not need to check null or 0
    if ( /*feeling === 0 || feeling === null || */ feeling === undefined) {
      alert("Please enter a number between 1 and 5");
      return;
    }

    // Saves data to store
    dispatch({
      type: 'UPDATE_FEELING',
      payload: feeling
    });

    // Clear input
    setFeeling(0);

    // Go to Understanding Page
    history.push('/review');
  }

  return (
    <>
      <div>
        <h2>How are you feeling today?</h2>

        <div> Feeling? </div>

        <input type="number" max="5" min="1" 
                value = {feeling}
                onChange= {(evt) => setFeeling(evt.target.value)}
                required 
        />

        <button onClick={onNext}>NEXT</button>
      </div>
    </>
  );
}

export default Feelings;