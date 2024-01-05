import React, { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from "../Axios/axios.js"
import TokenContext from '../context/TokenContext.js';
import './login.css';
function Login() {
    const [formData, setFormData] = useState({});
    const { userToken, tokenDispatch, userDispatch } = useContext(TokenContext);
    const [error, setError] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("/user/login", formData)
            tokenDispatch({ type: "SET_TOKEN", payload: result.data.token })
            userDispatch({ type: "SET_USER", payload: result.data.user })
            localStorage.setItem("authToken",JSON.stringify(result.data.token))
        } catch (error) {
            console.log(error);
            setError({ message: error.response.data.message })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    return (
        <div>
            {userToken && <Navigate to="/" />}
            <section className="login-container">
                <div className="px-6 h-full text-gray-800">
                    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                        <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                            {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-full" alt="Sample" /> */}
                            <svg class="stack" width="502" height="389" viewBox="-20 -70 302 389" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8.45782" y="177.006" width="138" height="188" rx="18" transform="rotate(-40.3888 8.45782 177.006)" fill="#F6A89E" stroke="#33322E" stroke-width="12"></rect><rect x="61.45" y="87.6386" width="138" height="188" rx="18" transform="rotate(-22.7249 61.45 87.6386)" fill="#8CD4CB" stroke="#33322E" stroke-width="12"></rect><rect x="136.422" y="22.1952" width="138" height="188" rx="18" transform="rotate(-6.47285 136.422 22.1952)" fill="#F4D799" stroke="#33322E" stroke-width="12"></rect><path d="M183 108.584L208.837 134.476L250 73.4761" stroke="#33322E" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <h1 class="typewriter" style={{color:'#F8F8F8', fontWeight:'bold', fontSize:50, marginLeft:100, marginTop:20, width:'fit-content'}}> <span>&#62;</span> to-do-mate</h1>
                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form method='post' onSubmit={handleSubmit}>
                                
                                <div style={{marginLeft:-190}} className="flex items-center my-4 before:flex-1 before:mt-0.5 after:flex-1 after:mt-0.5">
                                    <p style={{color:"white", fontSize: 50}} className="text-center font-semibold mx-4 mb-0">Welcome back</p>
                                </div>
                                <div>
                                    {error && (
                                        <div className="text-center border-2 border-green-600 p-2 mb-2 rounded-md bg-red-200 shadow-2xl">
                                            {error.message}
                                        </div>
                                    )
                                    }
                                </div>
                                {/* Email input */}
                                <div className="mb-6">
                                <p style={{color:'white'}}>Email ID</p>
                                    <input style={{backgroundColor: '#474646', color: 'white', border:'none'}}
                                        type="text"
                                        name='email'
                                        onChange={handleChange}
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="emailInput"
                                         />
                                </div>
                                {/* Password input */}
                                <div className="mb-6">
                                <p style={{color:'white'}}>Password</p>
                                    <input style={{backgroundColor: '#474646', color: 'white', border:'none'}}
                                        type="password"
                                        name='password'
                                        onChange={handleChange}
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="passInput"
                                         />
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    {/* <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="exampleCheck2" />
                                        <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
                                    </div> */}
                                    <Link style={{color:'#F3E98C'}}
                                        to={"/forgotPassword"}
                                    >Forgot password?</Link>
                                </div>
                                <div className="text-center lg:text-left">
                                    <button style={{backgroundColor:'#F5E44F', color:'black'}}
                                        type="submit"
                                        onClick={handleSubmit}
                                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                        Log in
                                    </button>
                                    <p style={{color:'white'}} className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        New here? 
                                        <Link style={{color:'#F3E98C'}}
                                            to={"/register"}
                                            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                        > Create an account now!</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Login;