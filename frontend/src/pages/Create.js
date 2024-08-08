import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Create = () => {
    const navigate = useNavigate();

    const returnHome = () => {
        navigate('/home'); 
    };

    const [title, setTitle] = useState('')
    const [cover, setCover] = useState('')
    const [category, setCategory] = useState('')
    const [desc, setDesc] = useState('')
    const [blogText, setBlogText] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const blog = {title, cover, category, desc, blogText}
        
        const response = await fetch ('/api/blogs', {
            method: 'POST',
            body: json.stringify(blog), 
            headers: { 'Content-type': 'applications/json' }
        })
        const json = await response.json()
    }

    return (
        <div className="create-container" onSubmit={handleSubmit}>
            <form className='create-info'>
                <label htmlFor="title">Blog Title</label>
                <input type='text' className='title' id='title' onChange={(e) => setTitle(e.target.value)} value={title}/>

                <label htmlFor="file">Cover Photo</label>
                <input type="file" className="cover" id="cover" onChange={(e) => setCover(e.target.value)} value={cover} />

                <label htmlFor="category">Category</label>
                <select className="category" id="category" onChange={(e) => setCategory(e.target.value)} value={category}>
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
                <input type="text" className="desc" id="desc" onChange={(e) => setDesc(e.target.value)} value={desc} />

                <label htmlFor="blog-text">Blog Text</label>
                <textarea className="blog-text" id="blog-text" onChange={(e) => setBlogText(e.target.value)} value={blogText}></textarea>
                <div className="post-buttons">
                    <button className="post-button">Post</button>
                    <button className="cancel-button" onClick={returnHome} >Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default Create;
