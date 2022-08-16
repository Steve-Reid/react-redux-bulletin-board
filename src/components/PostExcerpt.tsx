import React from 'react';
import { EntityId } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@app/hooks';
import { Post, selectPostById } from '@features/posts/postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

interface PostExcerptProps {
  postId: EntityId;
}

const PostExcerpt = ({ postId }: PostExcerptProps) => {
  const post = useAppSelector(state => selectPostById(state, postId)) as Post;

  return (
    <article>
      <h2>{post.title}</h2>
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostExcerpt;
