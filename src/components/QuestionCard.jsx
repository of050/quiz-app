<div className="answer-container">
{answers.map((answer, index) => (
    <button
      key={index}
      className="answer-btn"
      onClick={() => handleAnswerClick(answer)}
    >
      {answer}
    </button>
  ))}
  </div>