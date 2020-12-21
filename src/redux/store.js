import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

const middleWires = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middleWires));

export default store;
