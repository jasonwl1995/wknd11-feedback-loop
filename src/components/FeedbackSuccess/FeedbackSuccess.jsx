import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Success() {
  const history = useHistory();

  const feedbackInput = useSelector((store) => store.feedbackReducer);

  const onNext = (evt) => {
    evt.preventDefault();
    // Go to review Page
    history.push('/');
  }

  return (
    <>
      <div>
        <h2>Thank You!</h2>

        <button onClick={onNext}>Leave New Feedback</button>
      </div>
    </>
  );
}

export default Success;