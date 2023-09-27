import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth } from 'firebase/auth';

export default function RequireAuth() {
  const auth = getAuth();
  const [authenticated, setAuthenticated] = useState(true);

   // Check user authentication status on component mount
   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
    return () => unsubscribe(); 
  }, [auth]);

  const pathname = new URL(window.location.href).pathname;

  if (authenticated === true) {
    return <Outlet />;
  } else {
    return (
      <Navigate
        to={`/login?message=You must log in first.&redirectTo=${pathname}`}
      />
    );
  }
}
