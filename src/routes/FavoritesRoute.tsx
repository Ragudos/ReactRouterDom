import {
    Routes,
    Route
} from 'react-router-dom';
import FavoritesPage from '../pages/FavoritesPage';
import TvShows from '../components/TvShows';
import Movies from '../components/Movies';
import Cartoons from '../components/Cartoons';

const FavoritesRoute = () => {
    return (
        <FavoritesPage>
            <Routes>
                <Route
                    index
                    element={
                        <div></div>
                    }
                />
                <Route
                    path='tvshows'
                    element={
                        <TvShows />
                    }>
                    <Route
                        path=':id'
                        element={
                            <TvShows />
                        }
                    />
                </Route>
                <Route
                    path='movies'
                    element={
                        <Movies />
                    }
                />
                <Route
                    path='cartoons'
                    element={
                        <Cartoons />
                    }
                />
                <Route
                    path='*'
                    element={
                        <h5>Page Not Found!</h5>
                    }
                />
            </Routes>
        </FavoritesPage>
    );
};

export default FavoritesRoute;