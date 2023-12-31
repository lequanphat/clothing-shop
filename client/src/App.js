import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux'

//
import {publicRoutes, privateRoutes} from './routes/index';
import DefaultLayout from './components/Layouts/DefaultLayout';
import Protected from './components/Protected/Protected';

export default function App() {
    const isAuth = useSelector(state => state.user.auth);
    return (
        <div className="bg-blue">
                <BrowserRouter>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Page = route.page;
                            let Layout = route?.layout ? route.layout : DefaultLayout;
                            return <Route path={route.path} element={<Layout><Page /></Layout>} key={index}/>;
                        })}
                        {privateRoutes.map((route, index) => {
                            let Page = route.page;
                            let Layout = route?.layout ? route.layout : DefaultLayout;
                            return <Route path={route.path} element={<Protected isAuth={isAuth}><Layout><Page /></Layout></Protected>} key={index}/>;
                        })}
                    </Routes>
                </BrowserRouter>
        </div>
    );
}
