import { createStore} from 'redux';
import allReducer from "./reducer/reducer";

const store = createStore(allReducer);

export default store;