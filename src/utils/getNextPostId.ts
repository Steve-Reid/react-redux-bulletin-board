import type { Post } from '@features/posts/postsSlice';

const getNextPostId = (posts: Post[]) => {
  let lastId = Number.MIN_VALUE;

  for (let index = 0; index < posts.length; index += 1) {
    if (posts[index].id > lastId) {
      lastId = posts[index].id;
    }
  }

  return lastId + 1;
};

export default getNextPostId;
