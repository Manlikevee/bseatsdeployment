import React, { useEffect } from 'react'
import bslogo from '../assets/Navbar/bslogo.png'
const Boardseatexecindividual = () => {
    useEffect(() => {
        const hostUrl = window.location.origin; // Get the current host URL
        const redirectUrl = encodeURIComponent(`${hostUrl}/c/portal/login/openidconnect`);
        const userType = 'INDIVIDUAL';
        const realmname = 'bstest'
        // Construct the dynamic redirect URL
        const registrationUrl = `https://auth.boardseats.io/auth/realms/${realmname}/protocol/openid-connect/registrations?client_id=BoardseatsKeycloak&response_type=code&redirect_uri=${redirectUrl}&user_type=${userType}`;
        
        // Redirect the user
        window.location.href = registrationUrl;
      }, []);
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center">
            {/* Logo */}
            <img
              src={bslogo}
              alt="boardseats logo"
              className="w-[200px] lg:w-[200px] xl:w-[220px] mx-auto mb-4"
            />
            
            {/* Loading text */}
            <p className="text-xl text-gray-700">Redirecting...</p>
          </div>
        </div>
      );
    };

export default Boardseatexecindividual