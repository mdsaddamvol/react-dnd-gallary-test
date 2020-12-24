import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
const middleWires = [thunk];

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["media", "gallary", "modal"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middleWires));
export let persistor = persistStore(store);

export default store;
