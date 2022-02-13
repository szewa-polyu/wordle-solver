import { calWordGuessFeedback } from './calWordGuessFeedback';

const calWordEntropy = (word, possibleWords) => {
  const feedbackHistogram = {};
  for (const possibleWord of possibleWords) {
    const feedback = calWordGuessFeedback(word, possibleWord);
    // if (feedback === '22222') {
    //   console.log(possibleWord);
    // }
    if (feedback in feedbackHistogram) {
      feedbackHistogram[feedback]++;
    } else {
      feedbackHistogram[feedback] = 1;
    }
  }
  const possibleWordsLen = possibleWords.length;
  let entropy = 0;
  for (const key of Object.keys(feedbackHistogram)) {
    const prob = feedbackHistogram[key] / possibleWordsLen;
    feedbackHistogram[key] = prob;
    const information = -Math.log2(prob);
    entropy += prob * information;
  }
  return {
    feedbackHistogram,
    entropy
  };
};

export { calWordEntropy };
