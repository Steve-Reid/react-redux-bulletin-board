import React from 'react';
import PostsList from '@components/PostList';
import AddPostForm from '@components/AddPostForm';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '@components/Layout';
import SinglePostPage from '@pages/SinglePostPage';
import EditPostForm from '@components/EditPostForm';
import UsersList from '@components/UsersList';
import UserPage from '@pages/UserPage';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<PostsList />} />

      <Route path="post">
        <Route index element={<AddPostForm />} />
        <Route path=":postId" element={<SinglePostPage />} />
        <Route path="edit/:postId" element={<EditPostForm />} />
      </Route>

      <Route path="user">
        <Route index element={<UsersList />} />
        <Route path=":userId" element={<UserPage />} />
      </Route>

      {/* Catch all - TODO: replace with 404 component if you want */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
);

export default App;
