import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuthors } from '../../services/blogService';
import './authors.component.css';

export const AuthorsComponent = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const data = await getAuthors();
                setAuthors(data);
            } catch (error) {
                console.error("Error fetching authors:", error);
            }
        };
        fetchAuthors();
    }, []);

    return (
        <div className="main-container">
            <h2 className="page-title">Our Authors</h2>
            
            <div className="posts-grid"> 
                {authors.map(author => (
                    <div key={author.id} className="post-card author-card-center">
                        <h3 className="post-title-card">{author.name}</h3>
                        <p className="author-email">{author.email}</p>
                        <p className="company-name">{author.company?.name}</p>
                        
                        <Link to={`/authors/${author.id}`} className="full-link">
                            <button className="open-btn">View Posts</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};