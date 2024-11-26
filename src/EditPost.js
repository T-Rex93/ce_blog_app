import React, { useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPosts, updatePost } from "./api";

const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ title: '', content: ''});

    useEffect(() => {
        const loadPost = async () => {
            try {
                const { data } = await fetchPosts();
                const post = data.find((p) => p.id === parseInt(id));
                if (post) {
                    setFormData({ title: post.title, content: post.content });
                } else {
                    alert('Post not found!');
                    navigate('/');
                }
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        loadPost();
    }, [id, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updatePost(id, formData);
            alert('Post updated successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error updating post:', error);
            alert('Failed to update post!');
        }
    };

    return(
        <div>
            <h1>Edit Post</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value})}
                />
                <textarea
                    placeholder="Content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value})}
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditPost;