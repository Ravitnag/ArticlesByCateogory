import initState from "./initState";
const articleReducer = (state = initState.articles, action) => {
    switch (action.type){

       case 'DELETE_ARTICLE': {
            const temp_articles = state
            return temp_articles.filter(article=>article.id !== action.payload)       
    }
        case 'ADD_ARTICLE':{
            console.log(action.payload)
            const new_id_article = state.length + 1
            const new_article = {
                id: new_id_article,
                title: action.payload.title,
                author: action.payload.author,
                category: action.payload.category,
                article: action.payload.article
            }
            return [...state,
            new_article ]

        }
        default:
             return state;
}   
} 
export default articleReducer;