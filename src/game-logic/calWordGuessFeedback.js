// https://stackoverflow.com/questions/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript?rq=1
const getNumOfElementsInArray = (element, array) => {
  let count = 0;
  for (const arrEle of array) {
    if (element === arrEle) {
      count++;
    }
  }
  return count;
};

/*
Each "place" in feedback can be 0, 1, 2.
0 means no such letter.
1 means there is such letter but wrong position.
2 means correct letter at the position.
*/
const calWordGuessFeedback = (guess, actual) => {
  const feedback = [];
  for (let i = 0; i < guess.length; i++) {
    const guessLetter = guess[i];
    let feedbackElement = 0;
    if (guessLetter === actual[i]) {
      feedbackElement = 2;
    } else if (actual.includes(guessLetter)) {
      const numOfGuessLettersInGuess = getNumOfElementsInArray(
        guessLetter,
        guess
      );
      const numOfGuessLettersInActual = getNumOfElementsInArray(
        guessLetter,
        actual
      );
      if (numOfGuessLettersInGuess <= numOfGuessLettersInActual) {
        feedbackElement = 1;
      } else {
        const numOfOnesInFeedback = getNumOfElementsInArray(1, feedback);
        if (numOfOnesInFeedback < numOfGuessLettersInActual) {
          feedbackElement = 1;
        }
      }
    }
    feedback.push(feedbackElement);
  }
  return feedback.join('');
};

export { calWordGuessFeedback };
