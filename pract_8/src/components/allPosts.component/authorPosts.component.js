import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPostsByAuthorId, getAuthor } from '../../services/blogService';
import './authors.component.css';

export const AuthorPostsComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [authorName, setAuthorName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postsData = await getPostsByAuthorId(id);
                setPosts(postsData);
                const filteredPosts = postsData.filter(post => post.userId == id);
                setPosts(filteredPosts);

                if (getAuthor) {
                    const authorData = await getAuthor(id); 
                    setAuthorName(authorData.name);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="main-container">
            <button className="back-btn" onClick={() => navigate('/authors')}>
                ← Back to Authors
            </button>

            <h2 className="page-title">
                Posts by {authorName ? authorName : `Author #${id}`}
            </h2>

            <div className="posts-grid">
                {posts.map(post => (
                    <div key={post.id} className="post-card">
                        <h3 className="post-title-card">{post.title}</h3>
                        <p className="post-body">{post.body}</p>
                        
                        <div className="card-footer">
                            <span className="company-name">ID: {post.id}</span>
                            <Link to={`/posts/${post.id}`}>
                                <button className="open-btn">Open</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};