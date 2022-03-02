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
        axios.get('https://newsapi.org/v2/top-headlines??country=us&category='+newCategory+'&apiKey=df24fc46b742471cbfadebaa9ea1149a')
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