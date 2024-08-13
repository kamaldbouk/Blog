import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useBlogsContext } from '../hooks/useBlogsContext';
import { useAuthContext } from '../context/AuthContext';

const CreateForm = () => {
    const navigate = useNavigate();
    const { dispatch } = useBlogsContext();
    const { user } = useAuthContext(); 

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState(user?.name || '');
    const [category, setCategory] = useState('');
    const [description, setDesc] = useState('');
    const [content, setBlogText] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const blog = { title, author, category, description, content };

        try {
            const response = await fetch('/api/blogs', {
                method: 'POST',
                body: JSON.stringify(blog),
                headers: { 'Content-Type': 'application/json' },
            });

            const json = await response.json();

            if (!response.ok) {
                setError(json.error);
            } else {
                setTitle('');
                setAuthor(user?.name || ''); 
                setCategory('');
                setDesc('');
                setBlogText('');
                setError(null);
                console.log('New blog added.', json);

                dispatch({ type: 'CREATE_BLOG', payload: json });
                navigate('/home'); 
            }
        } catch (error) {
            setError('Failed to create blog.');
        }
    };

    return (
        <div className="create-container">
            <form className='create-info' onSubmit={handleSubmit}>
                <label htmlFor="title">Blog Title</label>
                <input
                    type='text'
                    className='title'
                    id='title'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />

                <input
                    type='hidden'
                    id='author'
                    value={author} 
                />

                <label htmlFor="category">Category</label>
                <select
                    className="category"
                    id="category"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                >
                    <option value="">Select a category</option>
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
                    onChange={(e) => setDesc(e.target.value)}
                    value={description}
                />

                <label htmlFor="blog-text">Blog Text</label>
                <textarea
                    className="blog-text"
                    id="blog-text"
                    onChange={(e) => setBlogText(e.target.value)}
                    value={content}
                ></textarea>

                <div className="post-buttons">
                    <button type="submit" className="post-button">Post</button>
                    <button type="button" className="cancel-button" onClick={() => navigate('/home')}>Cancel</button>
                </div>
            </form>
            {error && <div className='error-messages'>{error}</div>}
        </div>
    );
};

export default CreateForm;
