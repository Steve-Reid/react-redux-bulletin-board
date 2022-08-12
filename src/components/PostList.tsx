import React from 'react';
import { useAppSelector } from '@app/hooks';
import {
  getPostsError,
  getPostsStatus,
  selectAllPosts
} from '@features/posts/postsSlice';
import PostExcerpt from './PostExcerpt';

const PostList = () => {
  const posts = useAppSelector(selectAllPosts);
  const postStatus = useAppSelector(getPostsStatus);
  const error = useAppSelector(getPostsError);

  let content;
  if (postStatus === 'loading') {
    content = <p>&ldquo;Loading...`&ldquo;`</p>;
  } else if (postStatus === 'succeeded') {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map(post => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};

export default PostList;
