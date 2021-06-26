import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { handleLoadPosts } from '../../utils/handleLoadPosts';

import Posts from '../../components/Posts';

import './styles.css';
import Button from '../../components/Button';
import SearchInput from '../../components/SearchInput';

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
  const noMorePosts = page + postsPerPage >= allPosts.length;
  
  const [searchValue, setSearchValue] = useState('');

  const filteredPosts = !!searchValue ? allPosts.filter(post => {
    return post.title.toLowerCase().includes(
      searchValue.toLowerCase()
    );
  }) : posts;

  
  const loadPosts = useCallback((page, postsPerPage) => {
    handleLoadPosts().then((posts) => {
      setPosts(posts.slice(page, postsPerPage));
      setAllPosts(posts);
    });
  }, []);

  useEffect(() => {
    loadPosts(page, postsPerPage);
  }, [loadPosts, page, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const morePosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...morePosts);
    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  }  

  return (
    <section className="container">
      <SearchInput searchValue={searchValue} handleChange={(e) => handleChange(e)} />

      <br />
      <Posts posts={filteredPosts} />

      {!searchValue && (
        <Button 
          action={loadMorePosts} 
          text="Load More Posts" 
          disabled={noMorePosts} 
        />
      )}
    </section>
  );
}

export default Home;
