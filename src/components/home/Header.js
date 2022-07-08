import React from 'react';
import Particle from './Particle';

const Header = () => {
  return (
    <div class="min-h-screen my-8">
      <div className='grid md:grid-cols-2'>
        <div class="hero-content text-center" data-aos="fade-right">
          <div class="max-w-md text-right">
            <h1 class="text-5xl font-bold text-secondary">Bar Council MCQ<br /><span className='text-4xl text-primary'>by Legal Fist</span></h1>

            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
        <div data-aos="fade-left" className='flex justify-center items-center'>
          <img className='w-2/3' src='https://www.thestatesman.com/wp-content/uploads/2019/11/judiciary.jpg' alt="" />
        </div>
      </div>
      <div class="divider my-12">AND</div>
      <div className='grid md:grid-cols-2'>
      <div data-aos="zoom-in-right" className='flex justify-center items-center'>
          <img className='w-2/3' src='https://play-lh.googleusercontent.com/PoPXLWQT4mEwgAFevl_m7QgyctZZkbKX5_206dYRkFlZc6PH794I33uHR_rv4uyPGffO' alt="" />
        </div>
        <div class="hero-content text-center" data-aos="zoom-in-left">
          <div class="max-w-md text-left">
            <h1 class="text-5xl font-bold text-secondary">Judiciary MCQ<br /><span className='text-4xl text-primary'>by Legal Fist</span></h1>

            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
        
      </div>

      <Particle />
    </div>
  );
};

export default Header;