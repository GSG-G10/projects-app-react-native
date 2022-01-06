import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { reducer } from "./src/store/reducers";
const store = createStore(reducer);
import { Navigation } from "./src/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
