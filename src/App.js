import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoutes from "./Pages/ProtectedRoutes";
import SharedLayout from "./Pages/Internal/SharedLayout";
import Home from "./Pages/Internal/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ForgotenPassword from "./Pages/ForgotenPassword";
import Error from "./Pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <SharedLayout />
            </ProtectedRoutes>
          }>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgoten-password" element={<ForgotenPassword />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
