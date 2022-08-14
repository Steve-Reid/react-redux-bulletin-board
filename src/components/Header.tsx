import { Link } from 'react-router-dom';
import { increaseCount, getCount } from '@posts/postsSlice';
import { useAppDispatch, useAppSelector } from '@app/hooks';

const Header = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(getCount);

  return (
    <header className="Header">
      <h1>Redux Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">Post</Link>
          </li>
          <li>
            <Link to="user">Users</Link>
          </li>
        </ul>
        <button type="button" onClick={() => dispatch(increaseCount())}>
          {count}
        </button>
      </nav>
    </header>
  );
};

export default Header;
