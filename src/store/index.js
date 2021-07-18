import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { appReducer } from "./reducer";

const configureStore = createStore(
  appReducer,
  composeWithDevTools()
);

export default configureStore;