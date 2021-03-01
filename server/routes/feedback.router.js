// Import Libraries
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST a new feedback
router.post('/', (req, res) => {
  const feedbackSubmit = req.body;
  console.log('reqbody', req.body);

  // SQL for posting to database
  const sqlText = ` INSERT INTO feedback (feeling, understanding, support, comments)
                  VALUES ($1, $2, $3, $4);
                  `;
  
  const paramArgs = [
    feedbackSubmit.feelingInput,
    feedbackSubmit.understandingInput,
    feedbackSubmit.supportedInput,
    feedbackSubmit.comments,
  ];
  console.log('data', paramArgs);
  
  pool.query(sqlText, paramArgs)
    .then((dbResponse) => {
      console.log('post request completed');
      res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error posting', error);
        res.sendStatus(500);
    })
});
    
module.exports = router;