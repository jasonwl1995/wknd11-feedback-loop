import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feelings() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [feeling, setFeeling] = useState(0);

  const onNext = (evt) => {
    evt.preventDefault();

    if ( feeling === 0 || feeling === null || feeling === undefined) {
      alert(Please enter a number between 1 and 5);
      return;
    }

    // Saves data to store
    dispatch({
      type: 'UPDATE_FEELING',
      payload: feeling
    });

    // Clear imput
    setFeeling(0);

    // Go to Understanding Page
    history.push('/understanding');
  }

  return (
    <>


    </>
  );
}

export default Feelings;