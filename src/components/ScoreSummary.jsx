// components/ScoreSummary.jsx
import React from 'react';

function ScoreSummary({ score, total, userAnswers, questions, onRetake }) {
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-center mb-4">Your Score: {score} / {total}</h2>
      <ul className="space-y-4">
        {userAnswers.map((ans, i) => (
          <li key={i} className="p-4 border rounded bg-gray-50">
            <p dangerouslySetInnerHTML={{ __html: `Q${i + 1}: ${ans.question}` }} />
            <p className="text-green-600" dangerouslySetInnerHTML={{ __html: `Correct: ${ans.correct}` }} />
            <p className={ans.selected === ans.correct ? 'text-green-600' : 'text-red-600'} dangerouslySetInnerHTML={{ __html: `Your Answer: ${ans.selected}` }} />
          </li>
        ))}
      </ul>
      <button onClick={onRetake} className="mt-6 w-full bg-blue-600 text-white py-2 rounded">Retake Quiz</button>
    </div>
  );
}

export default ScoreSummary;