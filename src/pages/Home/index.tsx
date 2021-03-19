import { useEffect, useState } from 'react';

import { handleLoadPosts } from '../../utils/handleLoadPosts';

import Posts from '../../components/Posts';

import './styles.css';
import Button from '../../components/Button';

interface HomeProps {}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  cover: string;
}

function Home(props: HomeProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(6);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    handleLoadPosts().then((posts) => {
      setPosts(posts.slice(page, postsPerPage));
      setAllPosts(posts);
    });
  };

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const morePosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...morePosts);
    setPosts(posts);
    setPage(nextPage);
  };

  return (
    <section className="container">
      <Posts posts={posts} />
      <Button action={loadMorePosts} text="Load More Posts" />
    </section>
  );
}

export default Home;
