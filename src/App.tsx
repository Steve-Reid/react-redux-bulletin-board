import React from 'react';
import PostsList from '@components/PostList';
import AddPostForm from '@components/AddPostForm';
import { Route, Routes } from 'react-router-dom';
import Layout from '@components/Layout';
import SinglePostPage from '@pages/SinglePostPage';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<PostsList />} />

      <Route path="post">
        <Route index element={<AddPostForm />} />
        <Route path=":postId" element={<SinglePostPage />} />
      </Route>
    </Route>
  </Routes>
);

export default App;
