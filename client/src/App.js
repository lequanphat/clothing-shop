import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes/index';
import DefaultLayout from './components/Layouts/DefaultLayout';
export default function App() {
    return (
        <div className="bg-blue">
                <BrowserRouter>
                    <Routes>
                        {routes.map((route, index) => {
                            let Page = route.page;
                            let Layout = route?.layout ? route.layout : DefaultLayout;
                            return <Route path={route.path} element={<Layout><Page /></Layout>} key={index}/>;
                        })}
                    </Routes>
                </BrowserRouter>
        </div>
    );
}
