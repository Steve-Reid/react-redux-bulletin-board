import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchUsers } from '@users/usersSlice';
import { store } from './app/store';
import App from './App';
import './index.css';
import { fetchPosts } from './features/posts/postsSlice';

const container = document.getElementById('root')!;
const root = createRoot(container);

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
