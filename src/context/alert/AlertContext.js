import { createContext, useContext, useReducer } from 'react';
import alertReducer from './alertReducer';
import { ALERT_ACTIONS } from '../actions';

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (message, type, sec = 2) => {
    dispatch({
      type: ALERT_ACTIONS.SET_ALERT,
      payload: { message, type },
    });

    setTimeout(() => {
      dispatch({ type: ALERT_ACTIONS.REMOVE_ALERT });
    }, sec * 1000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertGlobalContext = () => {
  return useContext(AlertContext);
};

export { AlertProvider };