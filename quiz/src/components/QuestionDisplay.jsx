// src/components/QuestionDisplay.js
import React from 'react';
import QRCode from 'react-qr-code';

const QuestionDisplay = ({ question, options, currentQuestionIndex, onOptionClick, registeredName }) => {
    const qrValue = `http://localhost:3000/?questionIndex=${currentQuestionIndex}&name=${registeredName}`;

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>{question}</h2>
            <QRCode value={qrValue} size={200} />
            <div style={{ marginTop: '20px' }}>
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => onOptionClick(option)}
                        style={{ display: 'block', margin: '10px auto', padding: '10px 20px' }}
                    >
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionDisplay;
