import React, { useState } from "react";
import { createPost } from "./api";

const CreatePost = () => {
    const [formData, setFormData] = useState({ title: '', content: ''});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPost(formData);
            alert('Post created successfully!');
            setFormData({ title:'', content:''});
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Failed to create post!');
        }
    };

    return (
        <div>
            <h1>Create a New Post</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
                <textarea
                    placeholder="Content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value})}
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreatePost;