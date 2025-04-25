import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../ui'
import { useNavigate } from 'react-router'
import { getArticlesStart, getArticlesSuccess } from '../slice/article'
import ArticleService from '../service/article'

const Header = () => {
  const { articles, isLoading } = useSelector(state => state.article)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const getArticles = async () => {
    dispatch(getArticlesStart())
    try {
     const response = await ArticleService.getArticle()
     dispatch(getArticlesSuccess(response.articles))
    } catch (error) {
       console.log('error');
      

    }
  }

  useEffect(()=>{
    getArticles()
  },[])
  return (
    <>
      {isLoading && <Loader/> }
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
        {articles.map(item => (
          <div className='col' key={item.id}>
            <div className='card h-100 shadow-sm'>
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
              <div className="card-body">
                <p className="card-text font-semibold">{item.title}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="">
                    <button type="button" onClick={()=> navigate(`/article/${item.slug}`)} className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary ">Delete</button>
                  </div>
                  <small className="text-body-secondary font-bold text-3xl">{item.author.username}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Header
