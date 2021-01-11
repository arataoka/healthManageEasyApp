import React, { createContext, useReducer } from 'react';

const initialState = {
  popular: [],
};

type ACTIONTYPE = {
  type: 'SET_POPULAR';
  payload: { popular: [] };
};

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'SET_POPULAR':
      return { popular: action.payload.popular };
    default:
      return state;
  }
};

export const Store = createContext({
  globalState: initialState, //初期状態
  setGlobalState: (state: any) => state, //dispatch関数の初期値
});

const StoreProvider: React.FC = ({ children }) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState);
  return (
    <div>
      <Store.Provider value={{ globalState, setGlobalState }}>
        {children}
      </Store.Provider>
    </div>
  );
};

export default StoreProvider;
