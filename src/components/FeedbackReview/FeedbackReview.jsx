import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Review() {
  const dispatch = useDispatch();
  const history = useHistory();

  const feedbackInput = useSelector((store) => store.feedbackReducer);
  console.log('input', feedbackInput);
  const onSubmit = () => {
    console.log('submit');
    axios.post('/feedback', feedbackInput)
    .then((res) => {
      console.log('POST response', res);
      clearFeedbackInput();
      history.push('/success');
    })
    .catch((error) => {
      console.log("Error posting feedback", error);
    });
  }

  const clearFeedbackInput = () => {
    dispatch({
      type: 'CLEAR_FEEDBACK_INPUT'
    });
  };

  return (
    <>
      <div>
        <h2>Review Your Feedback</h2>

        <div> Feelings: {feedbackInput.feelingInput}</div>
        <div> Understanding: {feedbackInput.understandingInput}</div>
        <div> Support: {feedbackInput.supportedInput}</div>
        <div> Comments: {feedbackInput.comments}</div>

        <button onClick={onSubmit}>SUBMIT</button>
      </div>
    </>
  );
}

export default Review;