import LoginPage from '../../pages/auth/LoginPage';
function Protected({ isAuth, children }) {
    if (isAuth) return <div>{children}</div>;
    return <LoginPage />;
}

export default Protected;
