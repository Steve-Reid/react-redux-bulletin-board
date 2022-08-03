import React from 'react';
import PostsList from '@components/PostList';
import AddPostForm from '@components/AddPostForm';

const App = () => (
  <main className="App">
    <AddPostForm />
    <PostsList />
  </main>
);

export default App;
