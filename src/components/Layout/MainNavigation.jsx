import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import { authContext } from '../../store/authContext';

const MainNavigation = () => {
  const { token , logout } = useContext(authContext)

  console.log(token);
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {
            token.length > 0
              ?
              <>
                <li>
                  <Link to='/profile'>Profile</Link>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </>
              :
              <li>
                <Link to='/auth'>Login</Link>
              </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
