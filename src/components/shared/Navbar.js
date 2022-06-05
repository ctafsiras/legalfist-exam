import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const li = <>
        <li><Link to='/'>Home</Link></li>
        <li tabindex="0">
            <Link to='/'>
                Exam
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul class="p-2">
                <li><Link to='/'>Exam</Link></li>
                <li><Link to='/'>Result</Link></li>
            </ul>
        </li>
        <li><Link to='/'>About Us</Link></li>
        <li><Link to='/'>Contact Us</Link></li>
        <li><Link to='/'>FAQ</Link></li>
    </>
    if (loading) {
        return <h2>Loading</h2>
    }
    return (
        <div class="navbar bg-accent  lg:px-2">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {li}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">LegalFist Exam</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {li}
                </ul>
            </div>
            <div class="navbar-end">
                <div class="dropdown dropdown-end">
                    {
                        !user ?
                            <>
                                <Link to='/login' className='btn my-auto btn mr-2'>Login</Link>
                                <Link to='/register' className='btn my-auto btn-outline'>Register</Link>
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
                                    <li><a>Settings</a></li>
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