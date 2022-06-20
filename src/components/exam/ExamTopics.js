import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExamPaper from './ExamPaper';

const ExamTopics = () => {
    const navigate = useNavigate();
    const [questionCollection, setQuestionCollection] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/questions')
            .then(res => res.json())
            .then(data => setQuestionCollection(data))

    }, [])
    if (!questionCollection.length > 0) {
        return <progress class="progress h-1"></progress>
    }
    const { name, category, questions } = questionCollection[0]
    return (
        <div>
            <h2 className='text-center text-3xl font-semibold text-primary'>Exam Topics</h2>
            <div data-aos="flip-left" class="card max-w-sm bg-base-200 text--content">
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{category}</p>
                    <div class="card-actions justify-end">
                        <button
                            onClick={() => {
                                navigate('/examPaper', { state: questions })
                            }}
                            class="btn btn-primary">Start Now</button>
                    </div>
                </div>
            </div>
            {/* {category.length > 0 && <ExamPaper questions={questions}></ExamPaper>} */}
        </div>
    );
};

export default ExamTopics;