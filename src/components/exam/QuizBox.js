import React, { useState } from 'react';

const QuizBox = ({ i, q, attemptedNumber, setAttemptedNumber, mark, setMark }) => {

    const [att, setAtt] = useState(false);
    const [rightAnswered, setRightAnswered] = useState(false);
    return (
        <div>
            <div class="max-w-lg mx-auto">

                <fieldset class="my-5 border-2 rounded-lg p-4 bg-base-200">
                    <legend class="my-5 border-2 p-2 text-lg bg-base-300 rounded-lg">
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
                            console.log(mark);
                        }}
                        className='grid grid-cols-1 lg:grid-cols-2'>
                        {
                            q.options.map((a, index) =>

                                <div
                                    key={index} value={a}
                                    class="flex items-center mb-4">
                                    <input
                                        id={index}
                                        type="radio"
                                        name={i}
                                        value={a}
                                        class="cursor-pointer  text-2xl w-8 h-8" />
                                    <label
                                        name={i}
                                        for={index}
                                        class="text-lg ml-2 cursor-pointer">
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