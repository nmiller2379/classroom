import React, { useState } from "react";
import Question from "../Question/Question";
import QuizScore from "../QuizScore/QuizScore";
import quizQuestions from "../../data/quizData";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [furthestQuestion, setfurthestQuestion] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const handleAnswerSelect = (option) => {
    if (gameComplete) {
      return;
    }
    if (currentQuestionIndex < furthestQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (option === quizQuestions[currentQuestionIndex].answer) {
        setScore(score + 1);
      }
      setAnswers([...answers, option]);
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        if (option === quizQuestions[currentQuestionIndex].answer) {
          setScore(score + 1);
        }
        setGameComplete(true);
      }
    }
  };

  const handleNavigation = () => {
    if (gameComplete) {
      setCurrentQuestionIndex(0);
      setScore(0);
      setAnswers([]);
      setfurthestQuestion(0);
      setGameComplete(false);
    } else {
      setfurthestQuestion(currentQuestionIndex);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div>
      <Question
        question={quizQuestions[currentQuestionIndex].question}
        options={quizQuestions[currentQuestionIndex].options}
        onSelect={handleAnswerSelect}
      />
      <QuizScore
        score={
          gameComplete ? "The quiz is complete. Your score is " + score : score
        }
        total={quizQuestions.length}
      />
      {currentQuestionIndex > 0 && (
        <div className="nav-buttons">
          <button onClick={handleNavigation}>
            {gameComplete ? "Reset" : "Previous Question"}
          </button>
        </div>
      )}
    </div>
  );
}
