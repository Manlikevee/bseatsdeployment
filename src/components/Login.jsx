// @ts-ignore
import React, { useState } from 'react';

// Static list of users (username-password pairs)
const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user1', password: 'user123' },
    { username: 'user2', password: 'user456' }
];

const LOGIN_DURATION_MS = 10 * 60 * 1000; // 10 minutes in milliseconds

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if the entered username and password match a static user
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            const expirationTime = Date.now() + LOGIN_DURATION_MS;
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('loginExpiration', expirationTime.toString());
            onLogin(true);  // Set the login state to true
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="relative">
            <div className="contact relative h-[350px] overflow-hidden flex justify-center items-center">
                {/* <img src={ContactHeader} alt="" className="w-full absolute -z-10" /> */}
                <div className="h-full w-full absolute top-0 bg-[#0000004A] z-0"></div>
                <h4 className="text-white text-[64px] z-10">Blog Admin</h4>
            </div>
            <div className="pt-40 pb-10 px-5 flex justify-center">
                <div
                    className="flex flex-col lg:flex-row shadow-custom-shadow w-full md:w-[70%] lg:w-max relative -top-60">
                    <div className="p-[30px] lg:p-10 bg-white rounded-t-[10px] lg:rounded-t-none lg:rounded-tl-[10px] ">
                        <div className="flex flex-wrap justify-between items-center mb-5">
                            <h4 className="text-[24px] sm:text-[32px] text-[#424243] font-semibold">
                                Login to Upload New Blog
                            </h4>
                        </div>
                        {error && <p style={{color: 'red'}}>{error}</p>}
                        <form onSubmit={handleLogin}>
                            <div className="flex flex-col lg:flex-row mb-5 lg:gap-10">
                                <div className="flex flex-col">
                                    <label htmlFor="" className="mb-3">
                                        Username <span className="text-[#A91F2F]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="border-[1px] border-[#858A8F] border-solid rounded-[5.45px] h-[44.05px] md:w-[308.68px]"
                                        placeholder="Username"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className="mb-3">
                                        Password <span className="text-[#A91F2F]">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                        className="border-[1px] border-[#858A8F] border-solid rounded-[5.45px] h-[44.05px] md:w-[308.68px]"
                                    />
                                </div>
                            </div>
                            <button
                                className="uppercase h-[60px] w-full sm:w-[250px] bg-[#A91F2F] text-white rounded-[5px] mt-10"
                                type="submit">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
