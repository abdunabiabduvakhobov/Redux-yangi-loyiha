import { createSlice } from '@reduxjs/toolkit'
import { ArticleDetail } from '../Components'


const initialState = {
    isLoading: false,
    articles: [],
    ArticleDetail : null,
    error : null,
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        getArticlesStart: state => {
            state.isLoading = true
        },
        getArticlesSucces : (state , action) =>{
            state.isLoading = false
            state.articles = action.payload

        },
        getArticleFailure : (state , action) =>{
            state.error = action.payload
            state.isLoading = false

        },
        getArticleDelailStart : (state , action) => {
            state.isLoading = true
        },
        getArticleDelailSucces : (state , action) => {
            state.isLoading = false
            state.ArticleDetail = action.payload
        },
        getArticleDelailFailure : state => {
            state.isLoading = false
        },
    }
})

export const {
    getArticlesStart,
    getArticlesSucces,
    getArticleFailure,
    getArticleDelailFailure,
    getArticleDelailStart,
    getArticleDelailSucces,
    } = articleSlice.actions
export default articleSlice.reducer

