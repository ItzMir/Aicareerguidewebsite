import { createContext, useContext, useState, ReactNode } from 'react';

export type Role = 'student' | 'admin' | 'advisor' | null;

interface AuthContextType {
  role: Role;
  login: (r: Role) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  role: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Start with no auth, but for demo purposes, if user manually changes URL, we'll keep state simple.
  const [role, setRole] = useState<Role>(null);

  return (
    <AuthContext.Provider value={{ role, login: setRole, logout: () => setRole(null) }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
