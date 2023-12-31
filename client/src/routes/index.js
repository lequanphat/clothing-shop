import NullLayout from '../components/Layouts/NullLayout';
import OtherLayout from '../components/Layouts/OtherLayout';
import BlogPage from '../pages/blogs/BlogPage';
import HomePage from '../pages/home/HomePage';
import NotFoundPage from '../pages/error/NotFoundPage';
import OrderPage from '../pages/orders/OrderPage';
import ProductPage from '../pages/products/ProductPage';
import AuthPage from '../pages/auth/AuthPage';

const publicRoutes = [
    {
        path: '/',
        page: HomePage,
    },
    {
        path: '/products',
        page: ProductPage,
        layout: OtherLayout,
    },
    {
        path: '/blogs',
        page: BlogPage,
        layout: OtherLayout,
    },
    {
        path: '/login',
        page: AuthPage,
        layout: NullLayout,
    },
    {
        path: '*',
        page: NotFoundPage,
        layout: NullLayout,
    },
];
const privateRoutes = [
    {
        path: '/orders',
        page: OrderPage,
    },
];

export { publicRoutes, privateRoutes };
