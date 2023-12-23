import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoutes from "./Pages/ProtectedRoutes";
import SharedLayout from "./Pages/Internal/SharedLayout";
import Home from "./Pages/Internal/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ForgotenPassword from "./Pages/ForgotenPassword";
import Error from "./Pages/Error";
import MyTicket from "./Pages/Internal/MyTicket";
import NewTicket from "./Pages/Internal/NewTicket";
import TicketApproval from "./Pages/Internal/TicketApproval";
import Profile from "./Pages/Internal/Profile";
import DataBase from "./Pages/Internal/DataBase";
import Performance from "./Pages/Internal/Performance";
import UserLogHistory from "./Pages/Internal/UserLogHistory";
import Settings from "./Pages/Internal/Settings";

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
          <Route path="/my-tickets" element={<MyTicket />} />
          <Route path="/new-tickets" element={<NewTicket />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/database" element={<DataBase />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/ticket-approval" element={<TicketApproval />} />
          <Route path="/user-logs" element={<UserLogHistory />} />
          <Route path="/profile" element={<Profile />} />
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
