import BlogOutView from '../components/BlogOutView';
import { useBlogsContext } from '../hooks/useBlogsContext';
import { useEffect, useState } from 'react';
import { useAuthContext } from "../hooks/useAuthContext"


const Home = () => {
     
    const {blogs, dispatch} = useBlogsContext()
    const {user} = useAuthContext()

    useEffect(() => {
        const fetchBlogs = async () => {
            const headers = user ? { 'Authorization': `Bearer ${user.token}` } : {};
    
            const response = await fetch('/api/blogs', {
                headers: headers,
            });

            const json = await response.json();
    
            if (response.ok) {
                dispatch({ type: 'SET_BLOGS', payload: json });
            }
        };
    
        fetchBlogs();
    }, [dispatch, user]);
    
    
    // onlu show blogs when user is defined:
    // useEffect(() => {
    //     const fetchBlogs = async () => {
    //         const response = await fetch('/api/blogs', {
    //             headers: {'Authorization': `Bearer ${user.token}`},
    //           })
    //         const json = await response.json()

    //         if (response.ok){
    //             dispatch( {type: 'SET_BLOGS', payload: json})
    //         }
    //     }
    //     if (user) {
    //         fetchBlogs()
    //     }
    // }, [dispatch, user])

    return (
        <div className="home-container">
            <div className="popular-container">
                {/* sort these by number of likes (only top 6) */}
                <h2>Popular Blogs</h2>

                 {blogs && blogs.map((blog) => (
                        <BlogOutView key={blog._id} blog={blog}  />
                    ) )}

            </div>

            <div className="all-container">
                <div className="filter-container">
                    <h2>All Blogs</h2>
                    <div className="filter-options">
                        <label htmlFor="filter-select">Filter</label>
                        <select id="filter-select">
                            <option value="">Select an option</option>
                            <option value="technology">Technology</option>
                            <option value="lifestyle">Lifestyle</option>
                            <option value="travel">Travel</option>
                            <option value="food">Food</option>
                            <option value="education">Education</option>
                            <option value="health">Health</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="sports">Sports</option>
                        </select>
                    </div>
                </div>
                
                <div className="blogs-list">
                    {blogs && blogs.map((blog) => (
                        <BlogOutView key={blog._id} blog={blog}  />
                    ) )}
                </div>
                

            </div>
        </div>
    );
};

export default Home;
