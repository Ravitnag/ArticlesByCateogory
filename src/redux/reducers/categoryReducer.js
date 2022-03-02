import initState from "./initState";
const categoryReducer = (state = initState.categoryFilter, action) => {
    
    switch (action.type){
      
        case 'CHANGE_CATEGORY': {
        return action.payload       
    }

        default:
             return state;
}   
}

export default categoryReducer;