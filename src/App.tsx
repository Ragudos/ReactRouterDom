import {
  NavLink,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProtectFavorites from './routes/protected/ProtectFavorites';
import FavoritesRoute from './routes/FavoritesRoute';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>MOVIESITE</h1>
        <nav className='main_navbar'>
          <NavLink to={'/'}>HOME</NavLink>
          <NavLink to={'/about'}>ABOUT</NavLink>
          <NavLink to={'/favorites'}>FAVORITES</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route
            path='/'
            element={
              <HomePage />
            } />
          <Route
            path='/about'
            element={
              <AboutPage />
            }
          />
          <Route
            path='/favorites/*'
            element={
              <ProtectFavorites>
                <FavoritesRoute />
              </ProtectFavorites>
            }
          />
          <Route
            path='*'
            element={
              <h5>Page Not Found!</h5>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;