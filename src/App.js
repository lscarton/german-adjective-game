import React, { useState } from "react";

const sentences = [
  {
    text: "Der alt_ Mann beobachtete den rot__ Sonnenuntergang.",
    answers: ["e", "en"],
  },
  {
    text: "Die schön_ Blume steht auf dem grün__ Rasen.",
    answers: ["e", "en"],
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(["", ""]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  const currentSentence = sentences[index];

  const handleChange = (e, i) => {
    const newAnswers = [...userAnswers];
    newAnswers[i] = e.target.value;
    setUserAnswers(newAnswers);
  };

  const checkAnswers = () => {
    const isCorrect = userAnswers.every((ans, i) => ans === currentSentence.answers[i]);
    if (isCorrect) {
      setScore(score + 1);
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Incorrect. Try again!");
    }
  };

  const nextSentence = () => {
    setUserAnswers(["", ""]);
    setFeedback("");
    setIndex((index + 1) % sentences.length);
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold mb-4">German Adjective Endings Game</h1>
      <p>
        {currentSentence.text.split("_").map((part, i) => (
          <span key={i}>
            {part}
            {i < currentSentence.answers.length && (
              <input
                type="text"
                value={userAnswers[i]}
                onChange={(e) => handleChange(e, i)}
                className="border rounded w-12 text-center mx-1"
              />
            )}
          </span>
        ))}
      </p>
      <button onClick={checkAnswers} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Check</button>
      <button onClick={nextSentence} className="bg-gray-500 text-white px-4 py-2 rounded mt-4 ml-2">Next</button>
      <p className="mt-4">{feedback}</p>
      <p className="mt-2 font-bold">Score: {score}</p>
    </div>
  );
}

