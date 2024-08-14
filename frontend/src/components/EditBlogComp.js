import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';

const EditBlogComp = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const { user } = useAuthContext(); 
    
    const [blog, setBlog] = useState(null);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDesc] = useState('');
    const [content, setBlogText] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!user?.token){
            navigate('/error')
        }
        const fetchBlog = async () => {
            try {
                const response = await fetch(`/api/blogs/${id}`);
                const json = await response.json();
                if (response.ok) {
                    setBlog(json);
                    setTitle(json.title);
                    setCategory(json.category);
                    setDesc(json.description);
                    setBlogText(json.content);
                } else {
                    setError(json.error);
                }
            } catch (error) {
                setError('Failed to fetch blog.');
                console.error('Error fetching blog:', error);
            }
        };
        fetchBlog();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user?.token) {
            setError('Authorization token required');
            return;
        }
        
        const updatedBlog = { title, category, description: description, content: content };

        try {
            const response = await fetch(`/api/blogs/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(updatedBlog),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
            });
            const json = await response.json();
            if (response.ok) {
                navigate(`/blog/${id}`); 
            } else {
                setError(json.error);
            }
        } catch (error) {
            setError('Failed to update blog.');
            console.error('Error updating blog:', error);
        }
    };

    const returnHome = () => {
        navigate('/home'); 
    };

    return (
        <div className="create-container">
            <div className="create-info">
                <label htmlFor="title">Blog Title</label>
                <input 
                    type="text" 
                    className="title" 
                    id="title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                />

                <label htmlFor="category">Category</label>
                <select 
                    className="category" 
                    id="category" 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="technology">Technology</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="travel">Travel</option>
                    <option value="food">Food</option>
                    <option value="education">Education</option>
                    <option value="health">Health</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="sports">Sports</option>
                </select>

                <label htmlFor="desc">Blog Description</label>
                <input 
                    type="text" 
                    className="desc" 
                    id="desc" 
                    value={description}
                    onChange={(e) => setDesc(e.target.value)}
                />

                <label htmlFor="blog-text">Blog Text</label>
                <textarea 
                    className="blog-text" 
                    id="blog-text" 
                    value={content}
                    onChange={(e) => setBlogText(e.target.value)}
                ></textarea>
            </div>
            <div className="post-buttons">
                <button className="post-button" onClick={handleSubmit}>Update</button>
            </div>
            <button className="cancel-button" onClick={returnHome}>Cancel</button>
            {error && <div className='error-messages'>{error}</div>}
        </div>
    );
};

export default EditBlogComp;
