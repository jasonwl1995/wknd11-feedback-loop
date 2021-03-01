import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [support, setSupport] = useState(1);

  const onNext = (evt) => {
    evt.preventDefault();

    if (support === undefined) {
      alert("Please enter a number between 1 and 5");
      return;
    }

    // Saves data to store
    dispatch({
      type: 'UPDATE_SUPPORT',
      payload: support
    });

    // Clear input
    setSupport(1);

    // Go to comments Page
    history.push('/comment');
  }

  return (
    <>
      <div>
        <h2>How well are you being supported?</h2>

        <div> Support? </div>

        <input type="number" max="5" min="1" 
                value = {support}
                onChange= {(evt) => setSupport(evt.target.value)}
                required 
        />

        <button onClick={onNext}>NEXT</button>
      </div>
    </>
  );
}

export default Support;