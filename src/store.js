import { createStore } from "redux";
import { counterReducer } from "./services/reducer/CounterReducer";

export const store = createStore(counterReducer);
