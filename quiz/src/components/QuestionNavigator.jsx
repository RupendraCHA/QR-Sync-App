import React, { useState, useEffect } from 'react';
import { data as questions } from '../data/questions';
import QuestionDisplay from './QuestionDisplay';

const QuestionNavigator = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answerResult, setAnswerResult] = useState(null);
    const [registeredName, setRegisteredName] = useState('');
    const [isNameSubmitted, setIsNameSubmitted] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const questionIndex = urlParams.get('questionIndex');
        const name = urlParams.get('name');

        if (questionIndex) {
            setCurrentQuestionIndex(parseInt(questionIndex, 10));
        }

        if (name) {
            setRegisteredName(name);
        }

        const handleStorageChange = (event) => {
            if (event.key === 'currentQuestionIndex') {
                setCurrentQuestionIndex(parseInt(event.newValue, 10));
            }

            if (event.key === 'answerResult') {
                setAnswerResult(JSON.parse(event.newValue));
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleOptionClick = (selectedOption) => {
        const currentQuestion = questions[currentQuestionIndex];
        const isCorrect = selectedOption.correct;

        const newAnswerResult = {
            answer: selectedOption.text,
            correct: isCorrect,
        };

        setAnswerResult(newAnswerResult);

        const nextQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        setCurrentQuestionIndex(nextQuestionIndex);

        localStorage.setItem('currentQuestionIndex', nextQuestionIndex);
        localStorage.setItem('answerResult', JSON.stringify(newAnswerResult));
    };

    const handleNameSubmit = () => {
        if (registeredName) {
            setIsNameSubmitted(true);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    if (!isNameSubmitted) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>Enter your name to start the quiz:</h2>
                <input
                    type="text"
                    value={registeredName}
                    onChange={(e) => setRegisteredName(e.target.value)}
                    placeholder="Enter your name"
                    style={{ padding: '10px', fontSize: '16px' }}
                />
                <button
                    onClick={handleNameSubmit}
                    style={{ marginLeft: '10px', padding: '10px 20px', fontSize: '16px' }}
                >
                    Start Quiz
                </button>
            </div>
        );
    }

    return (
        <div>
            {registeredName && (
                <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
                    Welcome, {registeredName}!
                </h2>
            )}
            {answerResult && (
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <h3>
                        You selected: {answerResult.answer}. This answer is{' '}
                        {answerResult.correct ? 'correct!' : 'wrong!'}
                    </h3>
                </div>
            )}
            <QuestionDisplay
                question={currentQuestion.question}
                options={currentQuestion.answers}
                currentQuestionIndex={currentQuestionIndex}
                onOptionClick={handleOptionClick}
                registeredName={registeredName}
            />
        </div>
    );
};

export default QuestionNavigator;
