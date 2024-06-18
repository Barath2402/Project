import { useState } from "react";
import "./App.css";
import QuizView from "./components/QuizView";
import ScoreView from "./components/ScoreView";

function App() {
  const questions = [
    {
      question: "What does HTML stand for?",
      answers: [
        { text: "Hyper Text Markup Language", isCorrect: true },
        { text: "Home Tool Markup Language" },
        { text: "Hyperlinks and Text Markup Language" },
        { text: "Hyper Tool Markup Language" },
      ],
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      answers: [
        { text: "<br>", isCorrect: true },
        { text: "<break>" },
        { text: "<lb>" },
        { text: "<line>" },
      ],
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      answers: [
        { text: "class" },
        { text: "font" },
        { text: "styles" },
        { text: "style", isCorrect: true },
      ],
    },
    {
      question: "Which CSS property is used to change the background color?",
      answers: [
        { text: "bgcolor" },
        { text: "background-color", isCorrect: true },
        { text: "color" },
        { text: "background" },
      ],
    },
    {
      question: "Which HTML element is used to specify a header for a document or section?",
      answers: [
        { text: "<head>" },
        { text: "<header>", isCorrect: true },
        { text: "<section>" },
        { text: "<footer>" },
      ],
    },
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "Colorful Style Sheets" },
        { text: "Creative Style Sheets" },
        { text: "Cascading Style Sheets", isCorrect: true },
        { text: "Computer Style Sheets" },
      ],
    },
    {
      question: "Which CSS property controls the text size?",
      answers: [
        { text: "font-style" },
        { text: "text-size" },
        { text: "font-size", isCorrect: true },
        { text: "text-style" },
      ],
    },
    {
      question: "Which HTML element is used to define an unordered list?",
      answers: [
        { text: "<ul>", isCorrect: true },
        { text: "<ol>" },
        { text: "<li>" },
        { text: "<list>" },
      ],
    },
    {
      question: "Which property is used to change the font of an element in CSS?",
      answers: [
        { text: "font-style" },
        { text: "font-weight" },
        { text: "font-family", isCorrect: true },
        { text: "font-size" },
      ],
    },
    {
      question: "Which is the correct CSS syntax?",
      answers: [
        { text: "body:color=black;" },
        { text: "body {color: black;}", isCorrect: true },
        { text: "{body;color:black;}" },
        { text: "{body:color=black;}" },
      ],
    },
    {
      question: "In React, what is used to pass data to a component from outside?",
      answers: [
        { text: "setState" },
        { text: "render" },
        { text: "props", isCorrect: true },
        { text: "componentDidMount" },
      ],
    },
    {
      question: "What is the correct syntax for a functional component in React?",
      answers: [
        { text: "function ComponentName { return <div>Hello</div>; }" },
        { text: "function ComponentName() { return <div>Hello</div>; }", isCorrect: true },
        { text: "function ComponentName[] { return <div>Hello</div>; }" },
        { text: "function ComponentName{} { return <div>Hello</div>; }" },
      ],
    },
    {
      question: "Which method in React component lifecycle is called after the component is rendered for the first time?",
      answers: [
        { text: "componentWillMount" },
        { text: "componentDidUpdate" },
        { text: "componentDidMount", isCorrect: true },
        { text: "componentWillUpdate" },
      ],
    },
    {
      question: "In React, how do you handle an event?",
      answers: [
        { text: "By using HTML event attributes like `onclick`" },
        { text: "By using the `addEventListener` method" },
        { text: "By using event handlers with camelCase syntax", isCorrect: true },
        { text: "By directly calling the function" },
      ],
    },
    {
      question: "What is a key feature of JSX?",
      answers: [
        { text: "It allows HTML to be written within JavaScript", isCorrect: true },
        { text: "It is a new programming language" },
        { text: "It is used to style components" },
        { text: "It replaces CSS in React" },
      ],
    },
    {
      question: "How do you create a React app using Create React App?",
      answers: [
        { text: "npx create-react-app app-name", isCorrect: true },
        { text: "npm new react-app app-name" },
        { text: "npx new react-app app-name" },
        { text: "npm create-react-app app-name" },
      ],
    },
    {
      question: "Which hook is used to manage state in a functional component?",
      answers: [
        { text: "useEffect" },
        { text: "useState", isCorrect: true },
        { text: "useContext" },
        { text: "useReducer" },
      ],
    },
    {
      question: "What does the `useEffect` hook do in React?",
      answers: [
        { text: "Manages component state" },
        { text: "Handles side effects in functional components", isCorrect: true },
        { text: "Fetches data from an API" },
        { text: "Renders JSX elements" },
      ],
    },
    {
      question: "What is the virtual DOM in React?",
      answers: [
        { text: "A representation of the actual DOM kept in memory", isCorrect: true },
        { text: "A backup of the actual DOM" },
        { text: "The initial DOM structure of the web page" },
        { text: "A copy of the actual DOM" },
      ],
    },
    {
      question: "How do you conditionally render a component in React?",
      answers: [
        { text: "Using if statements inside the return method" },
        { text: "Using ternary operators or logical && in the JSX", isCorrect: true },
        { text: "By calling a function" },
        { text: "By setting a conditional attribute in JSX" },
      ],
    },
  ];




  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    // check score
    if (isCorrect) setScore(score + 1);

    const next = currentQuestion + 1;
    if (next < questions.length) setCurrentQuestion(next);
    else setIsQuizOver(true);
  };

  const handleResetClick = () => {
    // fix: score not resetting
    setScore(0);

    setCurrentQuestion(0);
    setIsQuizOver(false);
  };

  return (
    <div className="App">
      {isQuizOver ? (
        <ScoreView handleResetClick={handleResetClick} score={score} />
      ) : (
        <QuizView
          questions={questions}
          currentQuestion={currentQuestion}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
}

export default App;
