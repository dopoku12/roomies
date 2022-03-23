import React, { useState } from 'react';


export default function App() {
	const questions = [
        {
            questionText: 'What time do you go to bed on weeknights?',
            id:0,
            answerOptions: [
                {answerText: '10 PM or earlier', value:1},
                {answerText: 'Between 10pm and Midnight', value:2 },
                {answerText: 'Around Midnight', value:3},
                {answerText: '2AM or Later',value:4}
    
            ]
        },{
            questionText: 'How often do you pull all-nighters?',
            id:1,
            answerOptions: [
                {answerText: 'Several nights per week', value: 4},
                {answerText: 'Once a week', value :3 },
                {answerText: 'Once a month', value :2 },
                {answerText: 'Almost never', value : 1}
            ]
        }
    ];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	//const results = questions.map((question)=>{question.value})

	const handleAnswerOptionClick = (score) => {
		if (score) {
			const persVal = setScore(score);
            console.log(persVal)
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}



