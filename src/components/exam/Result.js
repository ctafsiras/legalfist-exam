import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
    const {state}=useLocation();
    const {mark, questions}=state;
    return (
        <div>
            <h1>Hello {mark}</h1>
            {
                questions.map((q, i)=>
                <div className='m-4'>
                    <h2>Q: {q.question}</h2>
                    <h2>A: {q.answer}</h2>
                </div>
                )
            }
        </div>
    );

};

export default Result;