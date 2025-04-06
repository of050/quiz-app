// components/QuizStart.jsx
import React, { useEffect, useState } from 'react';

function QuizStart({ onStart }) {
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState(5);
  const [category, setCategory] = useState('9');
  const [difficulty, setDifficulty] = useState('easy');

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then(res => res.json())
      .then(data => setCategories(data.trivia_categories));
  }, []);

  const handleStart = () => {
    const categoryName = categories.find(c => c.id === parseInt(category))?.name;
    onStart({ amount, category, difficulty, categoryName });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Start Your Quiz</h2>
      <div className="space-y-4">
        <div>
          <label>Number of Questions:</label>
          <input type="number" value={amount} min={1} max={50} onChange={e => setAmount(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label>Category:</label>
          <select value={category} onChange={e => setCategory(e.target.value)} className="w-full p-2 border rounded">
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Difficulty:</label>
          <select value={difficulty} onChange={e => setDifficulty(e.target.value)} className="w-full p-2 border rounded">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button onClick={handleStart} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Start Quiz</button>
      </div>
    </div>
  );
}

export default QuizStart;
