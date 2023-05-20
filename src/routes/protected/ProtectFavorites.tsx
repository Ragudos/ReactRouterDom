import { Navigate } from 'react-router-dom';

const user = 'exists';

const ProtectFavorites = ({ children }: { children: JSX.Element }) => {
    const loggedInUser = user;

    return loggedInUser ? children : <Navigate to={'/'} />
};

export default ProtectFavorites;