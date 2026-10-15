import questions from "./Question.json";

const Question = ({ setScore, score, currentIndex, setCurrentIndex }) => {
  function checkAnswer(option) {
    if (option === questions[currentIndex].answer) {
      setScore(score + 1);
    }

    setCurrentIndex(currentIndex + 1);
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center rounded-2xl bg-white p-6 shadow-lg sm:p-10">
        <p className="mb-4 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Question {currentIndex + 1} of {questions.length}
        </p>

        <h1 className="mb-8 w-full text-center text-2xl font-bold leading-relaxed text-slate-800 sm:text-3xl">
          {questions[currentIndex].question}
        </h1>

        <div className="flex w-full flex-col gap-4">
          {questions[currentIndex].options.map((option, index) => {
            return (
              <button
                key={index}
                onClick={() => checkAnswer(option)}
                className="w-full rounded-xl border-2 border-slate-200 bg-white px-5 py-4 text-left text-base font-medium text-slate-700 shadow-sm transition duration-200 ease-in-out hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 active:scale-[0.99] sm:text-lg"
              >
                <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-slate-600">
                  {String.fromCharCode(65 + index)}
                </span>

                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Question;
