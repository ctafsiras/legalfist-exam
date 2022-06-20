import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const li = <>
        <li><NavLink className='hover:scale-105 uppercase text-sm font-bold' to='/'>Home</NavLink></li>
        <li><NavLink className='hover:scale-105 uppercase text-sm font-bold' to='/exam'>Exam</NavLink></li>
        <li><NavLink className='hover:scale-105 uppercase text-sm font-bold' to='/about'>About Us</NavLink></li>
        <li><NavLink className='hover:scale-105 uppercase text-sm font-bold' to='/contact'>Contact Us</NavLink></li>
        {/* <li><NavLink to='/faq'>FAQ</NavLink></li> */}
    </>
    if (loading) {
        return <h2>Loading</h2>
    }
    return (
        <div class="navbar max-w-7xl mx-auto bg-white lg:px-2">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {li}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl hover:scale-95">

                    <img src='https://i0.wp.com/article.legalfist.com/wp-content/uploads/2021/01/cropped-cropped-legal-fist-logo-1.png?fit=165%2C45&ssl=1' alt="" />
                </Link>
            </div>

            <div class="navbar-end">
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 mr-1">
                        {li}
                    </ul>
                </div>

                <div class="dropdown dropdown-end">
                    {
                        !user ?
                            <>
                                <Link to='/login' className='btn my-auto btn btn btn-secondary mr-2 hover:-translate-y-1 text-white'>Login</Link>
                                <Link to='/register' className='my-auto hidden md:btn md:btn-outline hover:text-white hover:-translate-y-1 btn-secondary'>Register</Link>
                            </>
                            :
                            <>
                                <label title={"jsdlkjfalsdkjfuser?.displayName"} tabindex="0" class="btn btn-ghost btn-circle avatar">
                                    <div class="w-10 rounded-full">
                                        <img src="https://api.lorem.space/image/face?hash=33791" />
                                    </div>
                                </label>
                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a class="justify-between">
                                            Profile
                                            <span class="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Results</a></li>
                                    <li onClick={() => signOut(auth)}><a>Logout</a></li>
                                </ul>
                            </>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;