import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '@app/hooks';
import { selectPostById } from '@posts/postsSlice';
import PostAuthor from '@components/PostAuthor';
import TimeAgo from '@components/TimeAgo';
import ReactionButtons from '@components/ReactionButtons';

const SinglePostPage = () => {
  const { postId } = useParams();

  const post = useAppSelector(state => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className="postCredit">
        {/* <Link to={`/post/edit/${post.id}`}>Edit Post</Link> */}
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default SinglePostPage;
