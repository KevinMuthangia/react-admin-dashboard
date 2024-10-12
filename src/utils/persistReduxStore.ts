import { RootState } from "../redux/store";


export const saveToLocalStorage = (state: RootState) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('reduxState', serializedState);
    } catch (e) {
      console.error('Could not save state', e);
    }
  };
  
  export const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('reduxState');
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (e) {
      console.error('Could not load state', e);
      return undefined;
    }
  };
  