import { createStore } from "redux";
import reducers from './reducers';

const storee=createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//export default createStore(reducers)
export default storee