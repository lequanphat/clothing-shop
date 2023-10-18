import NullLayout from '../components/Layouts/NullLayout';
import HomePage from '../pages/home/HomePage';
import NotFoundPage from '../pages/notfound/NotFoundPage';
import OrderPage from '../pages/orders/OrderPage';
import ProductPage from '../pages/products/ProductPage';

const routes = [
    {
        path: '/',
        page: HomePage,
    },
    {
        path: '/products',
        page: ProductPage,
    },
    {
        path: '/orders',
        page: OrderPage,
    },
    {
        path: '*',
        page: NotFoundPage,
        layout: NullLayout,
    },
];

export default routes;
