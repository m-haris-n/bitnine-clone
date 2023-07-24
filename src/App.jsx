import { MantineProvider } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NoMatch from "./Pages/NoMatch";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import AuthGuard from "./Pages/AuthGuard";
function App() {
   const theme = {
      fontFamily: "Monda, sans-serif",
      colors: {
         brand: [
            "#EDF2FF",
            "#DBE4FF",
            "#BAC8FF",
            "#91A7FF",
            "#748FFC",
            "#022EA9",
            "#4C6EF5",
            "#4263EB",
            "#3B5BDB",
            "#364FC7",
         ],
      },
   };

   return (
      <MantineProvider
         theme={theme}
         withGlobalStyles
         withNormalizeCSS
      >
         <Routes>
            <Route
               index
               element={<Home />}
            />
            <Route
               path={"/login"}
               element={<Login />}
            />
            <Route
               path={"/register"}
               element={<Register />}
            />
            <Route element={<AuthGuard />}>
               <Route
                  path={"/profile"}
                  element={<Profile />}
               />
            </Route>

            <Route
               path={"*"}
               element={<NoMatch />}
            />
         </Routes>
      </MantineProvider>
   );
}

export default App;
