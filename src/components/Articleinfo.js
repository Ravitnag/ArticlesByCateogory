import React from 'react';
import { useDispatch} from 'react-redux';
import {deleteArticleAct, addArticleAct} from '../redux/actions/articleAction'

function Articleinfo(props) {


 const dispatch = useDispatch()
    
    return (
        <div>
         {props.article.title} 
         <button onClick={()=>dispatch(deleteArticleAct(props.article.id))}>Delete</button>
        </div>
    );
}

export default Articleinfo;