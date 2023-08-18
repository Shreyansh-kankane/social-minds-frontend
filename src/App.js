import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
// import Alumni from "scenes/Alumni";
import Organisation from "scenes/Organisation";
import Peoples from "scenes/widgets/Peoples";
// import Layout from "components/Layout";
// import DirectChatPage from "scenes/widgets/DirectChat";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); // creating theme
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}> 
          <CssBaseline />
          <Routes>
          {/* <Route path='/' element={<Layout progress={this.state.progress}/>}/> */}
            <Route index path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
            <Route
              path="/users"
              element={isAuth ? <Peoples /> : <Navigate to="/" />}
            />
            <Route
              path="/organisation"
              element={isAuth ? <Organisation/> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
