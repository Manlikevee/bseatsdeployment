import React, {useEffect, useState} from "react";
import Login from "../components/Login";
import BlogUpload from "../components/BlogUpload";

const BlogAdmin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (status) => {
        setIsLoggedIn(status);
    };

    // Check login status on component mount
    useEffect(() => {
        const loginStatus = localStorage.getItem('isLoggedIn');
        const loginExpiration = localStorage.getItem('loginExpiration');

        if (loginStatus === 'true' && loginExpiration) {
            const currentTime = Date.now();
            const expirationTime = parseInt(loginExpiration, 10);

            if (currentTime < expirationTime) {
                setIsLoggedIn(true);
            } else {
                // Expired session, clear localStorage
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('loginExpiration');
            }
        }
    }, []);

    // const handleLogout = () => {
    //     setIsLoggedIn(false);
    //     localStorage.removeItem('isLoggedIn');
    //     localStorage.removeItem('loginExpiration');
    // };


    return (
        <div className="">
            {/* If not logged in, show login form */}
            {!isLoggedIn && <Login onLogin={handleLogin} />}

            {/* If logged in, show blog upload form */}
            {isLoggedIn && <BlogUpload />}
        </div>
    );
};

export default BlogAdmin;
