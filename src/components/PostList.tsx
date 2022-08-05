import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks';
import {
  fetchPosts,
  getPostsError,
  getPostsStatus,
  selectAllPosts
} from '@features/posts/postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostList = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector(selectAllPosts);
  const postStatus = useAppSelector(getPostsStatus);
  const error = useAppSelector(getPostsError);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostList;
