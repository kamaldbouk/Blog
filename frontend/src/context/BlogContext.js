import { createContext, useReducer } from "react";

export const BlogContext = createContext()

export const blogsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BLOGS':
            return {
                blogs: action.payload
            }
        case 'CREATE_BLOG':
            return {
                // this is adding the new one and, ...all other ones
                blogs: [action.payload, ...state.blogs]
            }
        default:
            return state
    }
}

export const BlogContextProvider = ( {children} ) => {

    const [state, dispatch] = useReducer(blogsReducer, {
        blogs: null
    })

    // dispatch({type: 'CREATE_BLOG', payload: [{}. {}]})

    return (
        <BlogContext.Provider value={{...state, dispatch}}>
            { children }
        </BlogContext.Provider>
    )
}