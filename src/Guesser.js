import React, { useState } from "react";
import lingoCheck from "./utils/lingoCheck";

const Guesser = () => {
  const [answer, setAnswer] = useState("event");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleGuess = e => {
    e.preventDefault();
    const guess = input;
    setInput("");
    return setOutput(lingoCheck(guess, answer));
  };
  return (
    <>
      <p>Answer (for debugging): {answer}</p>
      <p>Your guess: {input}</p>

      <form onSubmit={handleGuess}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
      <ul>
        {output.length > 0 &&
          output.map(item => <li className={item.className}>{item.text}</li>)}
      </ul>
    </>
  );
};

export default Guesser;
