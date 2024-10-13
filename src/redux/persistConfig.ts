import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import themeReducer from "./theme-slice";


const themePersistConfig = {
  key: "theme",
  storage,
  whitelist: ["mode", "isSidebarOpen"],
  blacklist: [], // add items you don't want to persist e.g ["something"]
};

export const persistedReducer = persistReducer(themePersistConfig,  themeReducer);