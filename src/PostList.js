import React, { useEffect, useState} from "react";
import { fetchPosts } from "./api";
import { Link } from "react-router-dom";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts =async () => {
            try {
                const { data } = await fetchPosts();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts', error);
            }
        };
        getPosts();
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            <Link to='/create'>Create a New Post</Link>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <small>By: {post.author.username}</small>
                    <Link to={`/edit/${post.id}`}>Edit</Link>
                </div>
            ))}
        </div>
    );
};

export default PostList;