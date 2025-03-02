import React, { useState, useEffect } from "react";

export default function AdjectiveGame() {
  const [sentences, setSentences] = useState([]);
  const [currentSentence, setCurrentSentence] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("questions.json")
      .then((response) => response.json())
      .then((data) => {
        setSentences(data);
        setUserAnswers(Array(data[0].answers.length).fill(""));
      })
      .catch((error) => console.error("Error loading questions:", error));
  }, []);

  const handleChange = (index, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const checkAnswers = () => {
    let correct = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === sentences[currentSentence].answers[index]) {
        correct++;
      }
    });
    setScore(correct);
    setSubmitted(true);
  };

  const nextSentence = () => {
    if (currentSentence < sentences.length - 1) {
      setCurrentSentence(currentSentence + 1);
      setUserAnswers(Array(sentences[currentSentence + 1].answers.length).fill(""));
      setSubmitted(false);
    } else {
      alert("Game Over! Refresh to play again.");
    }
  };

  if (sentences.length === 0) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div className="p-4 max-w-lg mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">German Adjective Endings Game</h1>
      <p className="mb-4">Select the correct adjective endings.</p>
      <div className="text-lg mb-4 flex flex-wrap justify-center items-center gap-2">
        {sentences[currentSentence].text.split(" ").map((word, index) =>
          word.includes("_") ? (
            <div key={index} className="flex flex-col items-center">
              <span>{word}</span>
              <select
                className="border rounded px-2 py-1 mx-1 block w-20"
                size={4}
                value={userAnswers[index] || ""}
                onChange={(e) => handleChange(index, e.target.value)}
                disabled={submitted}
              >
                {sentences[currentSentence].options.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ) : (
            <span key={index} className="mx-1">{word}</span>
          )
        )}
      </div>
      {!submitted ? (
        <button
          onClick={checkAnswers}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      ) : (
        <div>
          <p className="mt-2">Score: {score} / {sentences[currentSentence].answers.length}</p>
          <button
            onClick={nextSentence}
            className="bg-green-500 text-white px-4 py-2 mt-2 rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

