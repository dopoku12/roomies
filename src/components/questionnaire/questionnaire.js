import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What time do you go to bed on weeknights?',
			id: 0,
			answerOptions: [
				{ answerText: '10 PM or earlier', isValue: 1 },
				{ answerText: 'Between 10pm and Midnight', isValue: 2 },
				{ answerText: 'Around Midnight', isValue: 3 },
				{ answerText: '2AM or Later', isValue: 4 }

			]
		}, {
			questionText: 'How often do you pull all-nighters?',
			id: 1,
			answerOptions: [
				{ answerText: 'Several nights per week', isValue: 4 },
				{ answerText: 'Once a week', isValue: 3 },
				{ answerText: 'Once a month', isValue: 2 },
				{ answerText: 'Almost never', isValue: 1 }
			]
		}, {
			questionText: 'Where do you typically do homework?',
			id: 2,
			answerOptions: [
				{ answerText: 'At my desk.', isValue: 3 },
				{ answerText: 'In the Library.', isValue: 2 },
				{ answerText: 'In a study lounge or similar space.', isValue: 1 },
				{ answerText: "I don't really do homework.", isValue: 4 }
			]
		}, {
			questionText: 'Do you Smoke?',
			id: 3,
			answerOptions: [
				{ answerText: 'Yes.', isValue: 5 },
				{ answerText: 'No.', isValue: 1 },
				{ answerText: 'Uhmmm, only when I drink ', isValue: 3 }

			]
		}, {
			questionText: 'Do you usually tend to have friends/romantic interests back to you room, or do you go to their room?',
			id: 4,
			answerOptions: [
				{ answerText: 'I like to have people to my room.', isValue: 4 },
				{ answerText: 'I like to go to other people’s rooms', isValue: 2 },
				{ answerText: '50/50 ', isValue: 3 },
				{ answerText: 'I don’t have friends or romantic interests…', isValue: 1 }

			]
		}

	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);


	const handleAnswerOptionClick = (isValue) => {
		if (isValue) {
			setScore(score + isValue)
			console.log(score + isValue)
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion)
		} else {
			setShowScore(true);
		}

	}

	const styleText = {
		fontSize: 50,
		fontWeight: 'bold',
	}

	const cardStyle = 'card bg-primary'

	return (
		<div className='app'>
			{showScore ? (
				<div style={styleText} className={cardStyle}>
					Your personality score is {score}.
				</div>
			) : (
				<>
					<div className={cardStyle}>
						<div className='question'>
							<div className='question-count'>
								<span style={styleText} className=''>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text m-2'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section m-2'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button className='m-2' onClick={() => handleAnswerOptionClick(answerOption.isValue)}>{answerOption.answerText}</button>
							))}
						</div>
					</div>
				</>
			)}
		</div>
	);
}



