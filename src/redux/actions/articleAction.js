export function deleteArticleAct (article_id)
{
  return {
    type: "DELETE_ARTICLE",
    payload: article_id
  }
}
export function addArticleAct (article)
{
  return {
    type: "ADD_ARTICLE",
    payload: article
  }
}
