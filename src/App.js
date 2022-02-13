import { allAllowedWords } from 'game-logic/allowedWords';
import { calWordEntropy } from 'game-logic/calWordEntropy';
import './App.css';

const App = _ => {
  const trial = calWordEntropy('slate', allAllowedWords);
  const trialDisplay = JSON.stringify(trial.feedbackHistogram, null, 2);
  console.log('trial: ', trialDisplay);
  let prob = 0;
  for (const key of Object.keys(trial.feedbackHistogram)) {
    prob += trial.feedbackHistogram[key];
  }
  console.log(prob);
  return <div className='App'>{trial.entropy}</div>;
};

export default App;
