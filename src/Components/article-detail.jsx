import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import ArticleService from '../service/article'
import { useDispatch } from 'react-redux'
import { getArticleDelailFailure, getArticleDelailStart, getArticleDelailSucces } from '../slice/article'

const ArticleDetail = () => {
  const {slug} = useParams()
  const dispatch = useDispatch(state => state.article)

  
  
  useEffect(()=>{
    const getArticleDetail = async() => {
      dispatch(getArticleDelailStart())
      try {
        const response = await ArticleService.getArticleDetail(slug)
        dispatch(getArticleDelailSucces(response.article))
      } catch (error) {
        dispatch(getArticleDelailFailure())
        
      }
    }
    getArticleDetail()
  
  },[slug])
  return (
    <div>slug {slug}</div>
  )
}

export default ArticleDetail