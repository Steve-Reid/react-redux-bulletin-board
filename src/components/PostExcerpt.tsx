import React from 'react';
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
    <p>{post.body.substring(0, 100)}</p>
    <p className="postCredit">
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
    </p>
    <ReactionButtons post={post} />
  </article>
);

export default PostExcerpt;
