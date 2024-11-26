import axios from 'axios';

const API = axios.create({ baseURL: 'http://127.0.0.1:8000/api' });

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export const fetchPosts = () => API.get('/posts/');
export const createPost = (data) => API.post('/posts/', data);
export const updatePost = (id, data) => API.put(`/posts/${id}`, data);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const login = (credentials) => API.post(`/token/`, credentials);