import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import  {searchArticlesByCategory} from '../redux/ApiArticle/actions'

function ArticleContainer(props) {
  
    return props.articleData.loading ? (
        <h2>Loading</h2>
    ) : props.articleData.error ? (
        <h2>{props.articleData.error}</h2>
    ):  (
        <div>
            {props.articleData &&
            props.articleData.articles &&
            props.articleData.articles.map(article => <p> {article.title}</p>)}
        </div>
    )
            }



 
const mapStateToProps = state => {
    return {
        articleData: state.apiArticles,
        category: state.category
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchArticlesByCategory: (category) => dispatch (searchArticlesByCategory(category))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ArticleContainer);