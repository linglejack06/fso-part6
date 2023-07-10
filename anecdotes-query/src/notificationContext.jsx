import { createContext, useContext, useReducer } from 'react';

const notificationContext = createContext();

const notificationReducer = (state, action) => {
  switch(action.type) {
    case 'SET':
      return action.payload;
    case 'REMOVE':
      return '';
    default:
      return state;
  }
};

export const NotificationContextProvider = ({ children }) => {
  const  [notification, notificationDispatch] = useReducer(notificationReducer, '');
  return (
    <notificationContext.Provider value={[notification, notificationDispatch]}>
      {children}
    </notificationContext.Provider>
  )
}
export const useNotificationValue = () => useContext(notificationContext)[0];
export const useNotificationDispatch = () => useContext(notificationContext)[1];