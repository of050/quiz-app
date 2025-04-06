// App.jsx
import React, { useEffect, useState } from 'react';
import QuizStart from './components/QuizStart';
import Quiz from './components/Quiz';
import ScoreSummary from './components/ScoreSummary';
import QuizHistory from './components/QuizHistory';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [quizOptions, setQuizOptions] = useState({});
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('quizHistory')) || [];
    setHistory(savedHistory);
  }, []);

  const startQuiz = async (options) => {
    const url = `https://opentdb.com/api.php?amount=${options.amount}&category=${options.category}&difficulty=${options.difficulty}&type=multiple`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setQuestions(data.results);
      setQuizOptions(options);
      setQuizStarted(true);
      setScore(0);
      setUserAnswers([]);
      setShowScore(false);
    } catch (error) {
      alert('Error fetching quiz questions. Please try again.');
    }
  };

  const endQuiz = () => {
    const newHistory = [
      ...history,
      {
        date: new Date().toLocaleString(),
        topic: quizOptions.categoryName,
        score,
        total: questions.length,
      },
    ];
    localStorage.setItem('quizHistory', JSON.stringify(newHistory));
    setHistory(newHistory);
    setShowScore(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
        <Header />
      {!quizStarted && !showScore && (
        <QuizStart onStart={startQuiz} />
      )}
      {quizStarted && !showScore && (
        <Quiz
          questions={questions}
          setScore={setScore}
          setUserAnswers={setUserAnswers}
          endQuiz={endQuiz}
          score={score}
        />
      )}
      {showScore && (
        <ScoreSummary
        score={score}
        total={questions.length}
        userAnswers={userAnswers}
        questions={questions}
        onRetake={() => {
          setShowScore(false);
          setQuizStarted(false);
        }}
      />
      
      )}
      <QuizHistory history={history} />
      <Footer />
    </div>
  );
}

export default App;
