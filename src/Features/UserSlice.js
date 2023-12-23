import { createSlice } from "@reduxjs/toolkit";

const initialState = { role: "", name: "", password: "" };

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      console.log(payload);
      state.name = payload?.name;
      state.password = payload?.password;
      if (payload?.name?.toLowerCase() === "admin") {
        state.role = "admin";
      } else if (payload?.name?.toLowerCase() === "support") {
        state.role = "support";
      } else if (payload?.name?.toLowerCase() === "operator") {
        state.role = "operator";
      } else {
        state.role = "user";
      }
    },
    logoutUser: (state) => {
      state.name = "";
      state.role = "";
      state.password = "";
    },
  },
});
export default UserSlice.reducer;
export const { loginUser, logoutUser } = UserSlice.actions;
