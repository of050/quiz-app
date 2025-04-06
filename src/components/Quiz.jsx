import React, { useState } from 'react';
import '../index.css'; 

function Quiz({ questions, setScore, setUserAnswers, endQuiz, score }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false); 

  const currentQuestion = questions[current];
  const answers = [...currentQuestion.incorrect_answers];
  const correctIndex = Math.floor(Math.random() * 4);
  answers.splice(correctIndex, 0, currentQuestion.correct_answer);

  const handleSubmit = () => {
    const isCorrect = answers[selected] === currentQuestion.correct_answer;
    if (isCorrect) setScore(prev => prev + 1);

    setUserAnswers(prev => [
      ...prev,
      { question: currentQuestion.question, selected: answers[selected], correct: currentQuestion.correct_answer },
    ]);

    setAnswered(true); 

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
        setAnswered(false); 
      } else {
        endQuiz();
      }
    }, 1500); 
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold mb-4">Question {current + 1} of {questions.length}</h3>
      <p className="mb-4" dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
      <div className="answer-container">
        {answers.map((ans, i) => {
          const isCorrect = ans === currentQuestion.correct_answer;
          const isSelected = selected === i;

          let btnClass = "answer-btn";
          if (answered) {
            if (isCorrect) {
              btnClass += " correct"; 
            } else if (isSelected && !isCorrect) {
              btnClass += " incorrect"; 
            }
          } else if (isSelected) {
            btnClass += " selected"; 
          }

          return (
            <button
              key={i}
              className={btnClass}
              onClick={() => !answered && setSelected(i)} 
              dangerouslySetInnerHTML={{ __html: ans }}
            />
          );
        })}
      </div>
      <button
        onClick={handleSubmit}
        disabled={selected === null}
        className="mt-4 bg-green-600 text-white w-full py-2 rounded disabled:opacity-50"
      >
        {current + 1 < questions.length ? 'Next' : 'Finish'}
      </button>
    </div>
  );
}

export default Quiz;