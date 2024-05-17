import { createSlice, configureStore } from '@reduxjs/toolkit';


const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false, user: null },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload; // Store user information
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});