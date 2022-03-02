const initailState = {
    loading: false,
    articles: [],
    error: ''
}

const apiReducer = (state=initailState, action) =>{
    switch (action.type){
        case 'START_FETCHING':
        return {
            ...state,
            loading: true
        }

        case 'SUCCESSFULLY_RECEIVED_ARTICLES':
            return {
                loading: false,
                articles: action.payload,
                error: ''
            }
        case 'RECEIVES_ERROR':
            return {
                loading: false,
                articles: [],
                error: action.payload
            }

        default:
            return {
                state
            }


    }
}

export default apiReducer;