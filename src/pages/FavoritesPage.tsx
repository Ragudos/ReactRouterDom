import { NavLink } from 'react-router-dom';

const FavoritesPage = ({ children }: { children: JSX.Element }) => {
    return (
        <>
            <nav className='sub_navbar'>
                <NavLink to={'tvshows'}>TV Shows</NavLink>
                <NavLink to={'movies'}>Movies</NavLink>
                <NavLink to={'cartoons'}>Cartoons</NavLink>
            </nav>
            <article>
                {children}
            </article>
        </>
    );
};

export default FavoritesPage;