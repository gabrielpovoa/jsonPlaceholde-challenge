import { useRoutes } from 'react-router-dom';
import { Album } from '../pages/Albums/Album';
import { Home } from '../pages/Albums/Home';
import { PhotoContainer } from '../pages/Albums/Photo';

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/album/:id', element: <Album /> },
        { path: '/photo/:id', element: <PhotoContainer /> }
    ]);
}