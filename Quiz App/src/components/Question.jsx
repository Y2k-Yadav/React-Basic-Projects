import questions from './Question.json';


const Question = ({ setScore, score, currentIndex, setCurrentIndex }) => {
    function checkAnswer(option) {
        setCurrentIndex(currentIndex + 1);
        if (option == questions[currentIndex].answer) {
            setScore(score + 1);
        }

    }

    return (
        <div className="flex flex-col items-center justify-start mt-8 h-screen">
            <h1 className="text-2xl font-bold mb-4">{questions[currentIndex].question}</h1>
            <div className="flex flex-col">
                {questions[currentIndex].options.map((option, index) => {
                    return <button key={index} onClick={() => checkAnswer(option)} className="bg-blue-500 w-90 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 ">{option}</button>

                })}
            </div>
        </div>
    )

}

export default Question
