import React,  { useCallback, useContext, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {searchArticlesByCategory} from '../redux/ApiArticle/actions'
import {createSelector} from 'reselect'
import Articleinfo from './Articleinfo'
import AddArticleForm from './AddArticleForm';
import {Context} from '../contexts/context'
import ArticleContainer from './ArticleContainer';

function Articlelist(props) {
let theme;
const [context, setContext] = useContext(Context);
if (context.isBlueTheme)
theme = context.blue;
    else
theme = context.purple;

const selectArticlesByCategory = createSelector(
state => state.articles,
state => state.category,
(articles, cateogry) => articles.filter(article => article.category === cateogry))


 const ArticlesByCategory = useSelector ((state)=>
 selectArticlesByCategory(state))

const category = useSelector( state => state.category)
const dispatch = useDispatch() 


useEffect (()=>{
  ChangeCategory(category)
},[])

const ChangeCategory = useCallback ((category) => dispatch(searchArticlesByCategory(category)),[dispatch])

    return (
        <div style={theme}>
          <button onClick={(e)=>ChangeCategory("Fashion")}>Fashion</button>
          <button onClick={(e)=>ChangeCategory("Business")}>Business</button>
          <button onClick={(e)=>ChangeCategory("Health")}>Health</button>
          <button onClick={(e)=>ChangeCategory("Entertainment")}>Entertainment</button>
          {ArticlesByCategory.map(article => <Articleinfo article={article} key={article.id}/>)} 
          <AddArticleForm/>  
          <ArticleContainer/>  
        </div>
    );
}

export default Articlelist;