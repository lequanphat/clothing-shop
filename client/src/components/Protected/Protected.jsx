import { Navigate } from 'react-router-dom';
function Protected({ isAuth, children }) {
    if (isAuth) return <div>{children}</div>;
    return <Navigate to="/login"/>;
}

export default Protected;
