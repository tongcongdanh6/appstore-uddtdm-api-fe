import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    // Add reducers here
    products: productReducer,
    categories: categoryReducer
});

export default rootReducer;