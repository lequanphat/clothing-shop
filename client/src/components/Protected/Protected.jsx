import LoginPage from "../../pages/auth/login";
function Protected({isAuth, children}) {
    if(isAuth) return ( <div>{children}</div> );
    return <LoginPage/>
}

export default Protected;