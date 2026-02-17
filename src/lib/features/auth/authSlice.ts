import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface User {
  id: string;
  username: string;
  email: string;
  // add other fields as needed
}

interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
}; // We might initialize from localStorage in a specialized hook or StoreProvider later

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('user', JSON.stringify(user));
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
      }
    },
    // initializeAuth: (state) => {
    //   if (typeof window !== 'undefined') {
    //     const token = sessionStorage.getItem('token');
    //     const user = sessionStorage.getItem('user');
    //     if (token && user) {
    //       state.token = token;
    //       try {
    //         state.user = JSON.parse(user);
    //       } catch (e) {
    //         console.error("Failed to parse user from session storage");
    //       }
    //     }
    //   }
    // }
    initializeAuth: (state) => {
  if (typeof window !== "undefined") {
    const token = sessionStorage.getItem("token");
    const user = sessionStorage.getItem("user");

    if (token) {
      state.token = token;
    }

    if (user) {
      state.user = JSON.parse(user);
    }
  }
}

  },
});

export const { setCredentials, logout, initializeAuth } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
