import Login from './Login';
import Register from './Register';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { RightShow, RightHide, LeftHide, LeftShow } from './Animation';
const LeftFrame = styled.div`
    position: absolute;
    background-color: blue;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: 0;
    animation: ${(props) => (props.show ? LeftHide : LeftShow)} 1.6s ease forwards;
    transform: 1.6s;
    z-index: 1;
    
`;
const RightFrame = styled.div`
    position: absolute;
    background-color: red;
    width: 90%;
    height: 90%;
    top: 50%;
    left: 40%;
    transform: translateY(-50%);
    animation: ${(props) => (props.show ? RightHide : RightShow)} 1.6s ease forwards;
    transform: 1.6s;
    z-index: 0;
`;
const SHOW = {
    LOGIN: 'login',
    REGISTER: 'register',
};
function AuthPage() {
    const loginRef = useRef(null)
    const registerRef = useRef(null)
    const [show, setShow] = useState(SHOW.LOGIN);
    const handleLoginShow = () => {
        if (show !== SHOW.LOGIN) {
            setShow(SHOW.LOGIN);
            registerRef.current.resetRegister();
        }
    };
    const handleRegisterShow = () => {
        if (show !== SHOW.REGISTER) {
            setShow(SHOW.REGISTER);
            console.log(loginRef.current);
            loginRef.current.resetLogin();
        }

    };

    return (
        <div className=" relative w-[100vw] h-[100vh] bg-primary ">
            <div  className='absolute w-[72%] h-[100%] top-[0] left-[0] bg-[white] p-[40px]'>
                <img className='w-[100%] h-[100%] border-[4px] border-primary rounded-[10px]' src="/images/background.jpg" alt='img'/>
            </div>
            {/* <LoginWrapper/> */}
            <div  className="relative top-[50%] left-[55%]  translate-y-[-50%] w-[440px] h-[600px]">
                <LeftFrame show={show === SHOW.REGISTER ? true : false} onClick={handleLoginShow}>
                    <Login ref={loginRef} handleShowRegister={handleRegisterShow}/>
                </LeftFrame>
                <RightFrame color="red" show={show === SHOW.LOGIN ? true : false} onClick={handleRegisterShow}>
                    <Register ref={registerRef} handleShowLogin={handleLoginShow}/>
                </RightFrame>
            </div>
        </div>
    );
}

export default AuthPage;
