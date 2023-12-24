import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/Firebase";

const initialState = {
  isLoadingUser: false,
  user: {},
  role: {},
};
// const coursesCollectionRef = collection(DataBase, "Courses");

//GET API
export const getUser = createAsyncThunk(
  "userSlice/getUser",
  async (data, thunkAPI) => {
    try {
      const resp = await signInWithEmailAndPassword(
        auth,
        data?.email,
        data?.password
      );
      return resp;
    } catch (error) {
      if (error) {
        alert("Invalid Credentials!");
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

//POST APi
export const postUser = createAsyncThunk(
  "userSlice/postUser",
  async (data, thunkAPI) => {
    try {
      const resp = await createUserWithEmailAndPassword(
        auth,
        data?.email,
        data?.password
      );
      return resp?.user;
    } catch (error) {
      if (error) {
        alert("Email already exist or password is less than 6 digits!");
      }
      return error;
    }
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOutUser: (state) => {
      state.user = {};
      state.role = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, { payload }) => {
        alert("Welcome!");
        state.isLoadingUser = false;
        state.user = payload?.user;
        if (payload?.user?.email === "operator@example.com") {
          state.role = "operator";
        } else if (payload?.user?.email === "admn@example.com") {
          state.role = "admin";
        } else if (payload?.user?.email === "support@example.com") {
          state.role = "support";
        } else {
          state.role = "user";
        }
      })
      .addCase(getUser.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoadingUser = false;
      })
      .addCase(postUser.fulfilled, (state) => {
        alert("Welcome!");
        state.role = "user";
        state.isLoadingUser = false;
      })
      .addCase(postUser.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(postUser.rejected, (state) => {
        state.isLoadingUser = false;
      });
  },
});

export default UserSlice.reducer;
export const { logOutUser } = UserSlice.actions;
