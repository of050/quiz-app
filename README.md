 Key Features
✅ 1. Quiz Flow
Start Page (QuizStart): User selects the number of questions, category, and difficulty.

Fetch Questions from [https://opentdb.com/api.php] using user-selected options.

Quiz (Quiz component):

Displays questions one by one.

Answers are shuffled and rendered as buttons.

User selects an answer, submits, and sees instant feedback (correct/incorrect).

Score is updated in real time.

Summary Page (ScoreSummary):

Shows final score.

Displays user's selected answers vs correct ones.

Retake Option resets quiz and starts over.

🗂️ 2. Quiz History
Each completed quiz is saved to localStorage with:

Date & time

Category name

Score & total questions

History is loaded on app start and displayed below the quiz.

💅 Styling & UX
Responsive layout with Tailwind CSS and custom CSS.

Answer buttons:

Uniform height and layout (with recent fix to prevent shifting).

Visual feedback for selected/correct/incorrect states.

Hover and focus styles for accessibility.

🧠 State Management
Uses useState for managing:

Quiz start

Current question index

Selected answer

User score

Quiz history

useEffect used for loading saved history from localStorage.

⚙️ Tech Stack
React + Vite for fast development and hot reloading

 Custom CSS

HTML5 + JavaScript (for event handlers)

Open Trivia API for question data
"# quiz-app" 
