import React from 'react';

const QuizBox = () => {
    const q = [3, 3, 3, 3]
    return (
        <div>
            <div class="max-w-lg mx-auto">

                <fieldset class="my-5 border-2 rounded-lg p-4 bg-base-200">
                    <legend class="my-5 border-2 p-2 text-lg bg-base-300 rounded-lg">
                        2  একটি সম্পত্তির নিলাম বিক্রয়ের কার্যক্রমে একজন অ্যাডভোকেট কোন পক্ষকে
                    </legend>


                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        {
                            q.map((qs, i) =>
                                <>
                                    <div class="flex items-center mb-4">
                                        <input
                                            id={i}
                                            type="radio"
                                            name="countries"
                                            value="United Kingdom"
                                            class="cursor-pointer  text-2xl w-8 h-8" />
                                        <label
                                            for={i}
                                            class="text-lg ml-2 cursor-pointer">
                                            United Kingdom
                                        </label>
                                    </div>
                                </>
                            )
                        }
                    </div>


                </fieldset>

            </div>

        </div>
    );
};

export default QuizBox;