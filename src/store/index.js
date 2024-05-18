import { createSlice, configureStore } from '@reduxjs/toolkit';


const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false, token: null },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload; // Store user information
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});