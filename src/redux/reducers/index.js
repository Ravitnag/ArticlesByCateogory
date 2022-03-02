import categoryReducer from "./categoryReducer";
import articleReducer from "./articleReducer";
import apiReducer from "../ApiArticle/apiArticlesReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    category: categoryReducer,
     articles: articleReducer,
     apiArticles: apiReducer
})
export default allReducers;