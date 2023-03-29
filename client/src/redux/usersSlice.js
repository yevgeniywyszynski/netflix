import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  list: [
    {
      idUser: 2,
      isAuth: false,
      email: "test@gmail.com",
      password: "test123",
    },
    {
      idUser: 312,
      isAuth: false,
      email: "pas@o2.pl",
      password: "pas123",
    },
  ],
  notFound: false,
  isLoggedIn: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    authentication: (state, action) => {
      let userLogin = action.payload;
      let found = false;

      //obejscie Proxy
      const existingUsers = JSON.parse(JSON.stringify(state.list));
      state.list = existingUsers;

      state.list.forEach((user) => {
        if (
          user.email === userLogin.userEmail &&
          user.password === userLogin.userPassword
        ) {
          user.isAuth = true;
          state.isLoggedIn = true;
          found = true;
        }
      });
      state.notFound = !found;
    },
    setNotFound: (state, action) => {
      state.notFound = action.payload;
    },
    registerNewUser: (state, action) => {
      let newMember = action.payload;
      newMember.id = uuid();
      state.isLoggedIn = true;
      state.list.push(newMember);
    },
  },
});

export const { authentication, registerNewUser, setNotFound } =
  usersSlice.actions;

export default usersSlice.reducer;

/*
Wycziścic redux
W userSlice przechowywać:
  - Czy zalogowany
  - kto zalogowany w redux
  - pobawic sie tym auth (facebook, github)
  https://firebase.google.com/docs/auth?hl=pl
*/
