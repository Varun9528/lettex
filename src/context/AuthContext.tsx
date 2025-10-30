'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { jwtService } from '@/lib/auth/jwt';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: string;
  email_verified?: boolean;
  created_at?: string;
  updated_at?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  isLoggedIn: boolean;
  language: string;
  setLanguage: (lang: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock localization function (in production, use a proper i18n library)
const t = (key: string, lang: string = 'en') => {
  const translations: any = {
    en: {
      loginSuccess: "Welcome back, {name}! Your session is secured.",
      invalidToken: "Session expired, please login again."
    },
    hi: {
      loginSuccess: "स्वागत है, {name}! आपका सत्र सुरक्षित है।",
      invalidToken: "सत्र समाप्त हो गया है, कृपया दोबारा लॉगिन करें।"
    }
  };
  
  return translations[lang][key] || key;
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Check if user is logged in on initial load
    const initializeAuth = async () => {
      if (initialized) {
        console.log('Auth already initialized, skipping');
        return;
      }
      
      console.log('Initializing auth...');
      
      const token = localStorage.getItem('token') || getCookie('token');
      const userData = localStorage.getItem('user');
      const savedLanguage = localStorage.getItem('language') || 'en';
      
      console.log('Token from storage:', token);
      console.log('User data from storage:', userData);
      
      setLanguage(savedLanguage);
      
      if (token && userData) {
        try {
          // Verify token first
          const decoded = jwtService.verifyAccessToken(token);
          console.log('Decoded token:', decoded);
          
          if (decoded) {
            const parsedUser = JSON.parse(userData);
            console.log('Parsed user:', parsedUser);
            setUser(parsedUser);
          } else {
            // Invalid token, clean up
            console.log('Invalid token, cleaning up');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            deleteCookie('token');
          }
        } catch (error) {
          console.error('Error parsing user data or invalid token:', error);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          deleteCookie('token');
        }
      } else {
        console.log('No token or user data found');
      }
      
      setInitialized(true);
      setLoading(false);
    };

    initializeAuth();
  }, [initialized]);

  // Helper function to get cookie value
  const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null; // Server-side check
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  };

  // Helper function to delete cookie
  const deleteCookie = (name: string): void => {
    if (typeof document === 'undefined') return; // Server-side check
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  };

  const login = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
    try {
      // Make actual API call to authenticate
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Set user and store token/user data in both localStorage and cookies
        setUser(data.user);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        // Also set cookie for server-side access
        if (typeof document !== 'undefined') {
          document.cookie = `token=${data.token}; path=/; max-age=86400; SameSite=Lax`;
        }
        
        return {
          success: true,
          message: t('loginSuccess', language).replace('{name}', data.user.name)
        };
      } else {
        return {
          success: false,
          message: data.error || 'Invalid email or password'
        };
      }
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        message: 'An error occurred during login. Please try again.'
      };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    deleteCookie('token');
  };

  const isLoggedIn = !!user;

  // Don't render children until auth state is determined
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isLoggedIn,
      language,
      setLanguage
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}