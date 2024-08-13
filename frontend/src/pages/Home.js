import BlogOutView from '../components/BlogOutView';
import { useBlogsContext } from '../hooks/useBlogsContext';
import { useEffect, useState } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
    const { blogs, dispatch } = useBlogsContext();
    const { user } = useAuthContext();
    const [filter, setFilter] = useState(''); 
    const [filteredBlogs, setFilteredBlogs] = useState([]);

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

    useEffect(() => {
        if (blogs) {
            if (filter) {
                setFilteredBlogs(blogs.filter(blog => blog.category === filter));
            } else {
                setFilteredBlogs(blogs);
            }
        }
    }, [blogs, filter]);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className="home-container">
            <div className="all-container">
                <div className="filter-container">
                    <h2>All Blogs</h2>
                    <div className="filter-options">
                        <label htmlFor="filter-select">Filter</label>
                        <select id="filter-select" value={filter} onChange={handleFilterChange}>
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
                    {filteredBlogs && filteredBlogs.map((blog) => (
                        <BlogOutView key={blog._id} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
