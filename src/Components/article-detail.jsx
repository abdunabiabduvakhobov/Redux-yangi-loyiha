import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import ArticleService from '../service/article'
import { useDispatch, useSelector } from 'react-redux'
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess
} from '../slice/article'
import { Loader } from '../ui'

const ArticleDetail = () => {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const { articleDetail, isLoading } = useSelector(state => state.article)

  useEffect(() => {
    

    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart())
      try {
        const response = await ArticleService.getArticleDetail(slug)
       
          dispatch(getArticleDetailSuccess(response.article))
        
      } catch (error) {
       
          dispatch(getArticleDetailFailure())
       
      }
    }

    getArticleDetail()

    
  }, [slug, dispatch])

  if (isLoading) {
    return <Loader />
  }

  if (!articleDetail) {
    return 
  }

  return  (
    <div className="container mx-auto py-5 px-4">
      <h1 className="text-4xl font-bold mb-4">{articleDetail.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{articleDetail.description}</p>
      <div className="flex gap-5 mb-4">
        <p className="text-gray-500">
          <span className="font-semibold">Created at:</span>
          {new Date(articleDetail.createdAt).toLocaleDateString()}
        </p>
      </div>
      <div className="prose max-w-none">{articleDetail.body}</div>
    </div>
  )
}

export default ArticleDetail
