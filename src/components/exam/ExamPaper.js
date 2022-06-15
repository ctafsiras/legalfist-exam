import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QuizBox from './QuizBox';

const ExamPaper = () => {
    const { state: questions } = useLocation();
    const navigate = useNavigate();
    const [attemptedNumber, setAttemptedNumber] = useState(0);
    const [mark, setMark] = useState(0);
    const Ref = useRef(null);

    // The state for our timer
    const [timer, setTimer] = useState('00:00:00');


    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }


    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {

            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the begining of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const clearTimer = (e) => {

        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next    
        setTimer('00:00:30');

        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();

        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 60);
        return deadline;
    }

    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible

    // We put empty array to act as componentDid
    // mount only
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }

    if (timer === '00:00:01') {
        // navigate('/result', { state: mark })
    }
    return (
        <div>
            <div className='text-center mx-auto bg-slate-400 shadow-lg'>

                <h2 className='fixed top-0 shado bg-violet-800 rounded-lg shadow-lg border-2 lg:top-0 opacity-100 text-3xl px-2 lg:px-12 font-bold'>Answered<br />{attemptedNumber}/{questions.length}</h2>

                <h2 className='fixed top-0 bg-violet-800 rounded-lg shadow-lg border-2 lg:top-0 text-center right-0 px-2 lg:px-12 text-3xl font-bold'>Remaining<br /> {timer}</h2>
            </div>

            <div className='grid gap-2 mx-2 mt-20 z-10'>
                {
                    questions.map((q, i) => <QuizBox
                        key={i}
                        i={i}
                        q={q}
                        attemptedNumber={attemptedNumber}
                        setAttemptedNumber={setAttemptedNumber}
                        mark={mark}
                        setMark={setMark} />)
                }
            </div>
            <div className="text-center my-4">


                <button
                    className='btn btn-primary fixed bottom-0 right-80'
                    onClick={() => {
                        navigate('/result', { state: { mark, questions } })
                    }}>Submit</button>
                <button
                    class=" p-0 w-12 h-12 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                    <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6 inline-block">
                        <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ExamPaper;