import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (userData) => {
    // In a real app, this would call your backend API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userData.email.includes('test')) {
          reject(new Error('Email already exists'));
        } else {
          setUser({
            id: Math.random().toString(36).substr(2, 9),
            name: userData.name,
            email: userData.email
          });
          resolve();
        }
      }, 1000);
    });
  };

  const login = async (credentials) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.password.length < 6) {
          reject(new Error('Invalid credentials'));
        } else {
          setUser({
            id: '123',
            name: 'Test User',
            email: credentials.email
          });
          resolve();
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
