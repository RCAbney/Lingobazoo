const lingoCheck = (guess, answer) => {
  guess = guess.toLowerCase();
  if (guess.length !== 5 || RegExp("[^a-z]").test(guess)) {
    return [
      {
        text: "Guess a five letter word, letters only please.",
        className: "incorrect"
      }
    ];
  }
  return guess === answer
    ? [
        {
          text: "YES YOU WIN!",
          className: "correct"
        }
      ]
    : letterCheck(guess, answer);
};

const letterCheck = (guess, answer) => {
  const guessSplit = guess.split(""),
    answerSplit = answer.split(""),
    output = [];
  for (let i = 0; i < answer.length; i++) {
    if (guessSplit[i] === answerSplit[i]) {
      output.push({
        text: guessSplit[i].toUpperCase(),
        className: "correct"
      });
    } else if (answerSplit.includes(guessSplit[i])) {
      output.push({
        text: guessSplit[i].toUpperCase(),
        className: "out-of-place"
      });
    } else {
      output.push({
        text: " ",
        className: "incorrect"
      });
    }
  }
  return output;
};

export default lingoCheck;
