import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '@features/posts/postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

interface PostExcerptProps {
  post: Post;
}

const PostExcerpt = ({ post }: PostExcerptProps) => (
  <article>
    <h3>{post.title}</h3>
    <p className="excerpt">{post.body.substring(0, 75)}...</p>
    <p className="postCredit">
      <Link to={`post/${post.id}`}>View Post</Link>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
    </p>
    <ReactionButtons post={post} />
  </article>
);

export default PostExcerpt;
