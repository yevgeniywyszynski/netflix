import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLoginState: null,

  notFound: false,
  isLoggedIn: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setNotFound: (state, action) => {
      state.notFound = action.payload;
    },
    registerNewUser: (state, action) => {
      let newUser = action.payload;

      let registerUserData = {
        userId: newUser.user.uid,
        email: newUser.user.email,
        password: newUser.user.password,
      };

      console.log("REGISTER_USER", registerUserData);

      state.isLoggedIn = true;
      state.userLoginState = registerUserData;
    },

    signIn: (state, action) => {
      let user = action.payload;

      console.log("password", user);
      let loginUserData = {
        userId: user.user.uid,
        email: user.user.email,
        password: user.user.password,
      };

      state.isLoggedIn = true;
      state.userLoginState = loginUserData;
    },
  },
});

export const { registerNewUser, setNotFound, signIn } = usersSlice.actions;

export default usersSlice.reducer;
