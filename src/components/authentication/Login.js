import React from 'react';

const Login = () => {
    return (
        <section class="py-26 ">
            <div class="container px-4 mx-auto">
                <div class="max-w-lg mx-auto">
                    <div class="text-center mb-8">
                        <a class="inline-block mx-auto mb-6" href="#">
                            <img src="nigodo-assets/logo-icon-nigodo.svg" alt="" />
                        </a>
                        <h2 class="text-3xl md:text-4xl font-extrabold mb-2">Sign in</h2>
                    </div>
                    <form action="">
                        <div class="mb-6">
                            <label class="block mb-2 font-extrabold" for="">Email</label>
                            <input class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="email" placeholder="email" />
                        </div>
                        <div class="mb-6">
                            <label class="block mb-2 font-extrabold" for="">Password</label>
                            <input class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="password" placeholder="**********" />
                        </div>
                        <div class="flex flex-wrap -mx-4 mb-6 items-center justify-between">
                            <div class="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                                <label for="">
                                    <input type="checkbox" />
                                    <span class="ml-1 font-extrabold">Remember me</span>
                                </label>
                            </div>
                            <div class="w-full lg:w-auto px-4"><a class="inline-block font-extrabold hover:underline" href="#">Forgot your password?</a></div>
                        </div>
                        <button class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">Sign in</button>
                        <p class="text-center mb-6 font-extrabold">Don&rsquo;t have an account? <a class="text-red-500 hover:underline" href="#">Sign up</a></p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;