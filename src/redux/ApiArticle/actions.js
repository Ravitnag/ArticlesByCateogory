import axios from 'axios'
import { changeCategoryAct } from '../actions/categoryAction'


export function startFetching ()
{
    return {
    type: 'START_FETCHING'
    }
}
export function successfullyReceivedArticles (articles)
{
    return {
        type: 'SUCCESSFULLY_RECEIVED_ARTICLES',
        payload: articles
    }
    
}

export function receivesError(error)
{
    return {
        type: 'RECEIVES_ERROR',
        payload:'error'
    }

}

export const searchArticlesByCategory = (newCategory) => {
    return (dispatch) => {
        dispatch (changeCategoryAct(newCategory))
        dispatch (startFetching)
        axios.get('https://saurav.tech/NewsAPI/top-headlines/category/'+newCategory+'/in.json')
                    .then(response => {
                        const articles = response.data.articles
                        dispatch(successfullyReceivedArticles(articles))
                    })
                    .catch(error=> {
                       const errorMsg = error.message 
                       dispatch (receivesError(errorMsg))
                    })

    }
}