import BlogOutView from '../components/BlogOutView';
import { useBlogsContext } from '../hooks/useBlogsContext';
import { useEffect, useState } from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState(null)
    
    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch('/api/blogs')
            const json = await response.json()

            if (response.ok) {
                setBlogs(json)
            }
        }
        fetchBlogs()
    }, [])

     
    // const {blogs, dispatch} = useBlogsContext()
    
    // useEffect(() => {
    //     const fetchBlogs = async () => {
    //         const response = await fetch('/api/blogs')
    //         const json = await response.json()

    //         if (response.ok){
    //             dispatch( {type: 'SET_BLOGS', payload: json})
    //         }
    //     }
    // })

    return (
        <div className="home-container">
            <div className="popular-container">
                {/* sort these by number of likes (only top 6) */}
                <h2>Popular Blogs</h2>

                 {blogs && blogs.map((blog) => (
                        <BlogOutView key={blog._id} blog={blog}  />
                        // <p key={blog._id}>{blog.title}</p>
                    ) )}

                {/* <BlogOutView />
                <BlogOutView />
                <BlogOutView />
                <BlogOutView />
                <BlogOutView />
                <BlogOutView /> */}
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

                    {/* {blogs && blogs.map((blog) => (
                        <BlogOutView />

                    ) )} */}

                    <BlogOutView />
                    <BlogOutView />
                    <BlogOutView />
                    <BlogOutView />
                    <BlogOutView />
                    <BlogOutView />
                    <BlogOutView />

                    
                </div>
                

            </div>
        </div>
    );
};

export default Home;
