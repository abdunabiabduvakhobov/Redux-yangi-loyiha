import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import ArticleService from '../service/article'

const ArticleCard = ({item,getArticles}) => {
    const { loggedIn, user } = useSelector(state => state.auth)
    const navigate = useNavigate()
    const deleteArticle = async (slug) =>{
        try {
       await ArticleService.deleteArticle(slug)
          getArticles()
        } catch (error) {
          console.log(error);
          
          
        }
    
      }
  return (
    <div className='col' key={item.id}>
            <div className='card h-100 shadow-sm'>
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
              <div className="card-body">
                <p className="card-text font-semibold">{item.title}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="">
                    <button type="button" onClick={() => navigate(`/article/${item.slug}`)} className="btn btn-sm btn-outline-secondary">View</button>
                    {loggedIn && user.username == item.author.username && (
                      <>
                        <button onClick={()=>navigate(`/edit-article/${item.slug}`)} type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        <button onClick={() => deleteArticle(item.slug)} type="button" className="btn btn-sm btn-outline-secondary ">Delete</button>
                      </>
                    )}

                  </div>
                  <small className="text-body-secondary font-bold text-3xl">{item.author.username}</small>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ArticleCard