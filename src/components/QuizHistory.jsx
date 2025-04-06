// components/QuizHistory.jsx
import React from 'react';

function QuizHistory({ history }) {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Quiz History</h2>
      {history.length === 0 ? (
        <p>No quizzes taken yet.</p>
      ) : (
        <ul className="space-y-2">
          {history.map((h, i) => (
            <li key={i} className="p-3 bg-white border rounded shadow">
              <p><strong>{h.topic}</strong> - {h.date}</p>
              <p>Score: {h.score} / {h.total}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default QuizHistory;
