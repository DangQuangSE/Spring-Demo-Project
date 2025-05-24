import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const useAuth = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      loading: false,

      login: async (email, password) => {
        try {
          set({ loading: true });
          const response = await axios.post('/api/auth/login', {
            email,
            password,
          });
          set({
            user: response.data.user,
            token: response.data.token,
            loading: false,
          });
          toast.success('Login successful!');
          return true;
        } catch (error) {
          set({ loading: false });
          toast.error(error.response?.data?.message || 'Login failed');
          return false;
        }
      },

      register: async (userData) => {
        try {
          set({ loading: true });
          const response = await axios.post('/api/auth/register', userData);
          set({
            user: response.data.user,
            token: response.data.token,
            loading: false,
          });
          toast.success('Registration successful!');
          return true;
        } catch (error) {
          set({ loading: false });
          toast.error(error.response?.data?.message || 'Registration failed');
          return false;
        }
      },

      logout: () => {
        set({ user: null, token: null });
        toast.success('Logged out successfully');
      },

      updateUser: (userData) => {
        set({ user: { ...user, ...userData } });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

export { useAuth }; 