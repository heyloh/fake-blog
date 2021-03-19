import PostCard from '../PostCard';

import './styles.css';

interface PostsProps {
  posts: Array<Post>;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  cover: string;
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <div className="posts">
      {posts.map((post: Post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          cover={post.cover}
        />
      ))}
    </div>
  );
};

export default Posts;
