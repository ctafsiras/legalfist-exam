import React, { useState } from 'react';
import shuffle from '../../hooks/shuffle';

const QuizBox = ({ i, q, attemptedNumber, setAttemptedNumber, mark, setMark }) => {

    const [att, setAtt] = useState(false);
    const [rightAnswered, setRightAnswered] = useState(false);
    return (
        <div>
            <div data-aos={i % 2 === 0 ? 'fade-left' : 'fade-right'} class="max-w-lg mx-auto">

                <fieldset class={`my-5 border-2 rounded-lg p-4 duration-300 ${att ? 'bg-green-200' : 'bg-base-200'}`}>
                    <legend class="my-5 border-2 p-2 text-lg font-bold bg-slate-300 rounded-lg">
                        {i + 1}. {q.question}
                    </legend>
                    <div
                        onClick={(e) => {
                            if (!att) {
                                setAttemptedNumber(attemptedNumber + 1)
                                setAtt(true)
                            }
                            if (e.target.value === q.answer) {

                                if (!rightAnswered) {
                                    setMark(mark + 1);
                                    setRightAnswered(true)
                                }
                            } else {
                                if (rightAnswered) {
                                    setMark(mark - 1);
                                    setRightAnswered(false)
                                }
                            }
                        }}
                        // name={q.question}
                        className='grid grid-cols-1 lg:grid-cols-2'>
                        {
                            q.options.map((a, index) =>
                                <div
                                    key={index} value={a}
                                    class="flex items-center mb-4 shadow-sm bg-slate-400 rounded-lg p-1 m-1">
                                    <input
                                        name={`question-${i}`}
                                        id={`${i}-${index}`}
                                        type="radio"
                                        value={a}
                                        class="cursor-pointer  text-2xl w-8 h-8" />
                                    <label
                                        for={`${i}-${index}`}
                                        class="text-lg ml-2 cursor-pointer w-full">
                                        {a}
                                    </label>
                                </div>
                            )
                        }
                    </div>
                </fieldset>
            </div>
        </div>
    );
};

export default QuizBox;