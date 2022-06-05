import React from 'react';

const Features = () => {
    const features = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="rounded-xl h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>, text: "১৫০০+ এমসিকিউ প্রশ্ন!"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>, text: "সকল পরীক্ষার রিপোর্ট কার্ড!"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>, text: "প্রতিটি প্রশ্নের বিস্তারিত ব্যাখাসহ বিশ্লেষণ!"
        }
    ]



    return (
       <div className='my-5'>
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-3'>
            {
                features.map(f =>
                    <div class="card w-full lg:w-96 bg-base-200 shadow-xl mx-auto 
                    transition hover:bg-base-300 duration-300 cursor-pointer ease-in">
                        <figure class="px-10 pt-10">
                            {f.icon}
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">{f.text}</h2>
                        </div>
                    </div>
                )
            }
        </div>
       </div>
    );
};

export default Features;