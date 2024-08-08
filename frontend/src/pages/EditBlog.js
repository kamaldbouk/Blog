import { useNavigate } from 'react-router-dom';

const EditBlog = () => {
    const navigate = useNavigate();

    const returnHome = () => {
        navigate('/home'); 
    };

    return (
        <div className="create-container">
            <div className="create-info">
                <label htmlFor="title">Blog Title</label>
                <input type="text" className="title" id="title" />

                <label htmlFor="file">Cover Photo</label>
                <input type="file" className="cover" id="cover" />

                <label htmlFor="category">Category</label>
                <select className="category" id="category">
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
                <input type="text" className="desc" id="desc" />

                <label htmlFor="blog-text">Blog Text</label>
                <textarea className="blog-text" id="blog-text"></textarea>
            </div>
            <div className="post-buttons">
                <button className="post-button">Post</button>
                <button className="cancel-button" onClick={returnHome} >Cancel</button>
            </div>
        </div>
    );
};

export default EditBlog;
