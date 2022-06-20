import React from 'react';
import Particle from './Particle';

const Header = () => {
  return (
    <div class="min-h-screen">
      <div className='grid md:grid-cols-2'>
        <div class="hero-content text-center" data-aos="fade-right">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold text-secondary">Bar Council MCQ<br /><span className='text-4xl text-primary'>by Legal Fist</span></h1>

            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary animate-bounce text-white">Get Started</button>
          </div>
        </div>
        <div data-aos="fade-left">
          <img src='https://pixabay.com/get/g918a79e1428dd8b639d82ca7523b0e1ccde2480e62aacefaa15740b497af5102b241b3fa4790513342a53fbbbe7d6aab72faca9267b94a2e521b4bec2bbad7c1d5bcfdaf171a758bca9af8ca111a81a3_640.png' alt="" />
        </div>
      </div>
      <div className='grid md:grid-cols-2'>
      <div data-aos="zoom-in-right">
          <img src='https://pixabay.com/get/g918a79e1428dd8b639d82ca7523b0e1ccde2480e62aacefaa15740b497af5102b241b3fa4790513342a53fbbbe7d6aab72faca9267b94a2e521b4bec2bbad7c1d5bcfdaf171a758bca9af8ca111a81a3_640.png' alt="" />
        </div>
        <div class="hero-content text-center" data-aos="zoom-in-left">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold text-secondary">Judiciary MCQ<br /><span className='text-4xl text-primary'>by Legal Fist</span></h1>

            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary animate-bounce text-white">Get Started</button>
          </div>
        </div>
        
      </div>

      <Particle />
    </div>
  );
};

export default Header;