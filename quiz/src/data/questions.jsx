// src/data/questions.js
const data = [
    {
        id: 1,
        question: "1. The function which is called to render HTML to a web page in react?",
        answers: [
            { text: "a. ReactDOM_render()", correct: false },
            { text: "b. render()", correct: true },
            { text: "c. render_DOM()", correct: false },
            { text: "d. DOM_HTML()", correct: false },
        ],
    },
    {
        id: 2,
        question: "2. Total ways of defining variables in ES6 is?",
        answers: [
            { text: "a. 1", correct: false },
            { text: "b. 2", correct: false },
            { text: "c. 3", correct: true },
            { text: "d. 4", correct: false },
        ],
    },
    {
        id: 3,
        question: "3. Using which of the following command can prevent default behaviour in react?",
        answers: [
            { text: "a. PreventDefault()", correct: true },
            { text: "b. avoidDefault()", correct: false },
            { text: "c. revokeDefault()", correct: false },
            { text: "d. None of the above", correct: false },
        ],
    },
    {
        id: 4,
        question: "4. What are arbitrary inputs of components in react also known as?",
        answers: [
            { text: "a. Elements", correct: false },
            { text: "b. Keys", correct: false },
            { text: "c. Props", correct: true },
            { text: "d. Ref", correct: false },
        ],
    },
    {
        id: 5,
        question: "5. What happens if you render an input element with disabled = {false}?",
        answers: [
            { text: "a. It will be rendered as enabled", correct: true },
            { text: "b. It will be rendered as disabled", correct: false },
            { text: "c. It will not be rendered at all", correct: false },
            { text: "d. None of the above", correct: false },
        ],
    },
    {
        id: 6,
        question: "6. What is Babel?",
        answers: [
            { text: "a. Javascript compiler", correct: true },
            { text: "b. Javascript transpiler", correct: false },
            { text: "c. Javascript interpreter", correct: false },
            { text: "d. JSX creator", correct: false },
        ],
    },
    {
        id: 7,
        question: "7. What is ReactJS mainly used for building?",
        answers: [
            { text: "a. Database", correct: false },
            { text: "b. Connectivity", correct: false },
            { text: "c. User Interface", correct: true },
            { text: "d. Design Platform", correct: false },
        ],
    },
    {
        id: 8,
        question: "8. Among the following which is a must-have for every ReactJS component?",
        answers: [
            { text: "a. RenderComponent", correct: true },
            { text: "b. SetinitialComponent", correct: false },
            { text: "c. Render", correct: false },
            { text: "d. constructor()", correct: false },
        ],
    },
];


export { data };
