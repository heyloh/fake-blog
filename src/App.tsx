import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  cover: string;
}

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    handleLoadPosts();
  }, []);

  const handleLoadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
    
    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsWithPhotos = postsJson.map((post: Post, index: number) => {
      return {
        ...post,
        cover: photosJson[index].url
      }
    })

    setPosts(postsWithPhotos);
  };

  return (
    <section className="container">
      {/* <h1>Fake Blog</h1> */}
      <div className="posts">
        {posts.map((post: Post) => (
          <div key={post.id} className="post">
            <img src={post.cover} alt={post.title}/>
            <div className="post-content">
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
