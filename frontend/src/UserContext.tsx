import React, { createContext, useState, ReactNode, useContext } from 'react';

interface UserContextProps {
  username: string;
  userId: string;
  pageNumber: number;
  money: number;
  setusername: (name: string) => void;
  setUserId: (id: string) => void;
  setPageNumber: (page: number) => void;
  setMoney: (money:number) => void; 
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [username, setusername] = useState('');
  const [userId, setUserId] = useState('');
  const [pageNumber, setPageNumber] = useState(50);
  const [money, setMoney] = useState(1000);

  return (
    <UserContext.Provider
      value={{ username, userId, pageNumber, money, setusername, setUserId, setPageNumber, setMoney  }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};