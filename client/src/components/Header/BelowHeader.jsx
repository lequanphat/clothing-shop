
import {faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import Menu from './Menu/Menu';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Action from './Action/Action';
import Account from './Account/Account';

function BelowHeader() {
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.user.auth);
    const username = useSelector(state => state.user.username);
    console.log('header render');
    return (
        <div className="bg-[white]   shadow-md">
            <div className="w-[85%] h-[74px] mx-auto flex justify-between items-center">
                <h1 className="text-[22px] font-bold">E-FOSSHOP</h1>
                <Menu />
                <ul className="flex h-auto items-center">
                    <Action isAuth={true} icon={faMagnifyingGlass}/>
                    <Action isAuth={isAuth} icon={faBell} quantity={4}/>
                    <Action isAuth={isAuth} icon={faCartShopping} quantity={2}/>
                    <Account isAuth={isAuth} username={username} />
                    
                    <li className={`ml-[20px] ${isAuth && 'hidden'}`}>
                        <Button
                            primary
                            small
                            textSize="1.2rem"
                            content="Đăng nhập"
                            onClick={() => {
                                navigate('/login');
                            }}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BelowHeader;
