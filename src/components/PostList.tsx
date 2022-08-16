import React from 'react';
import { useAppSelector } from '@app/hooks';
import {
  getPostsError,
  getPostsStatus,
  selectAllPosts,
  selectPostIds
} from '@features/posts/postsSlice';
import PostExcerpt from './PostExcerpt';

const PostList = () => {
  const orderedPostIds = useAppSelector(selectPostIds);
  const postStatus = useAppSelector(getPostsStatus);
  const error = useAppSelector(getPostsError);

  let content;
  if (postStatus === 'loading') {
    content = <p>&ldquo;Loading...`&ldquo;`</p>;
  } else if (postStatus === 'succeeded') {
    content = orderedPostIds.map(postId => (
      <PostExcerpt key={postId} postId={postId} />
    ));
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};

export default PostList;
