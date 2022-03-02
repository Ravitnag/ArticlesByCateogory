import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import {addArticleAct} from '../redux/actions/articleAction'


function AddArticleForm(props) {
    
const [title, setTitle] = useState ('')
const [author, setAuthor] = useState ('')
const [category, setCategory] = useState ('Business')
const [article, setArticle] = useState ('')
const dispatch = useDispatch()

function HandleSubmit  (e) {

    e.preventDefault();
    const articleToAdd = {
        title: title,
        author: author,
        category: category,
        article: article
    }   
    dispatch(addArticleAct(articleToAdd))
}


    
    return (
        <div>
                  <form onSubmit={(e)=>HandleSubmit(e)}>
                 <label>title</label>
                 <input name='Title'  type="text" placeholder="title"  onChange={(e)=>setTitle(e.target.value)}/>
                 <label>author</label>
                 <input name='Author' type="text" placeholder="author"  onChange={(e)=>setAuthor(e.target.value)}/>
                 <label>category</label>
                 <select name='Category'  onChange={(e)=>setCategory(e.target.value)}>
                    <option value="Fashion">Fashion</option>
                    <option value="holiday">holiday</option>
                    <option value="books">books</option>
                </select>
                <label>article</label>
                 <textarea name='Article' type="text" onChange={(e)=>setArticle(e.target.value)}/>
                 <input type="submit" value="publish"/>
                  </form> 
        </div>
    );
}

export default AddArticleForm;