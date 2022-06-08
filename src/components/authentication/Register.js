import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        if (data.password === data.confirmPassword) {
            createUserWithEmailAndPassword(data.email, data.password)
        }else{

        }
    };
    return (
        <section class="py-26 ">
            <div class="container px-4 mx-auto">
                <div class="max-w-lg mx-auto">
                    <div class="text-center mb-8">
                        <a class="inline-block mx-auto mb-6" href="#">
                            <img src="nigodo-assets/logo-icon-nigodo.svg" alt="" />
                        </a>
                        <h2 class="text-3xl md:text-4xl mb-2 font-bold">Register</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="mb-6">
                            <label class="block mb-2" for="">Email</label>
                            <input
                                {...register("email", { required: true })}
                                class="inline-block w-full p-4 leading-6 text-lg placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="email" placeholder="email" />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div class="mb-6">
                            <label class="block mb-2" for="">Password</label>
                            <input
                                {...register("password", { required: true })}
                                class="inline-block w-full p-4 leading-6 text-lg placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="password" placeholder="**********" />
                            {errors.password && <span>This field is required</span>}
                        </div>
                        <div class="mb-6">
                            <label class="block mb-2" for="">Confirm Password</label>
                            <input
                                {...register("confirmPassword", { required: true })}
                                class="inline-block w-full p-4 leading-6 text-lg placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="password" placeholder="**********" />
                            {errors.confirmPassword && <span>This field is required</span>}
                        </div>
                        <div class="flex flex-wrap -mx-4 mb-6 items-center justify-between">
                            <div class="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                                <label for="">
                                    <input type="checkbox" />
                                    <span class="ml-1">Remember me</span>
                                </label>
                            </div>
                            <div class="w-full lg:w-auto px-4"><Link class="inline-block hover:underline" to="reset-password">Forgot your password?</Link></div>
                        </div>
                        <button class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200 font-bold">Register</button>
                        <p class="text-center mb-6">Already have an account? <Link class="text-red-500 hover:underline font-bold" to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;