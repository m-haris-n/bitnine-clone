import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function AuthGuard() {
   const nav = useNavigate();
   const [loggedIn, setLoggedIn] = useState(false);
   useEffect(() => {
      console.log(localStorage.getItem("authToken"));
      if (!localStorage.getItem("authToken")) {
         nav("/login");
      } else {
         setLoggedIn(true);
      }
   }, []);

   return <>{loggedIn && <Outlet />};</>;
}
