import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import { TabsTemplate } from './templates/TabsTemplate';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'tabs',
                element: <TabsTemplate />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
