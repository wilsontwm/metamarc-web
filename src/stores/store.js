import rootReducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(persistedReducer, composedEnhancer);

export default store;
export const persistor = persistStore(store);
