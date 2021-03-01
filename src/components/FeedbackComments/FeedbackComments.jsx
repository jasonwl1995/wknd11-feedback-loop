import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [comments, setComments] = useState('');

  const onNext = (evt) => {
    evt.preventDefault();

    // Saves data to store
    dispatch({
      type: 'UPDATE_COMMENTS',
      payload: comments
    });

    // Clear input
    setComments('');

    // Go to review Page
    history.push('/review');
  }

  return (
    <>
      <div>
        <h2>Any comments you want to leave?</h2>

        <div> Comments? </div>

        <input type="text"
                value = {comments}
                onChange= {(evt) => setComments(evt.target.value)}
        />

        <button onClick={onNext}>NEXT</button>
      </div>
    </>
  );
}

export default Comments;