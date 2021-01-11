import React, { createContext, useReducer } from 'react';

const initialState = {
  popular: [],
  selected: { id: '', snippet: { title: '', description: '' } },
  related: [],
};

type ACTIONTYPE = {
  type: 'SET_POPULAR' | 'SET_SELECTED' | 'SET_RELATED';
  payload: {
    popular: [];
    selected: { id: any; snippet: any };
    related: [];
  };
};

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'SET_POPULAR':
      return { ...state, popular: action.payload.popular };
    case 'SET_SELECTED':
      return { ...state, selected: action.payload.selected };
    case 'SET_RELATED':
      return { ...state, related: action.payload.related };
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
