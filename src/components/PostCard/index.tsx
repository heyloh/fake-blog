import './styles.css';

interface PostProps {
  title: string;
  body: string;
  cover: string;
}

const PostCard = ({ title, body, cover }: PostProps) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default PostCard;
