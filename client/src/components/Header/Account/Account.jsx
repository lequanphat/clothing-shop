import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightFromBracket, faGear, faUser } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../../../api/internal'; 
import { resetUser } from '../../../store/userSlice';
import { useDispatch } from 'react-redux';
function Account({isAuth, username}) {
    const dispatch = useDispatch();
    const handleLogout = async() => {
        await logout();
        dispatch(resetUser());
    }
    return ( <li className={`${isAuth ? 'block' : 'hidden'}  group relative ml-[16px]`}>
    <img
        className="w-[34px] h-[34px] rounded-full border-[2px] border-[#ccc]"
        src="/images/me.png"
        alt="img"
    />
    <ul
        className=" group-hover:block  transition-all shadow-medium rounded-[4px]  hidden bg-white absolute top-[100%] right-[0] w-[200px] text-[1.6rem] 
        "
    >
        <li className="font-medium  py-[6px] px-[12px]"><FontAwesomeIcon className='text-[#333] mr-[9px]' icon={faUser}></FontAwesomeIcon><span>{username}</span></li>
        <li className=" py-[6px] hover:bg-[#ccc] px-[12px]"><FontAwesomeIcon className='text-[#333] mr-[8px]' icon={faGear}></FontAwesomeIcon><span>Thiết lập tài khoản</span></li>
        <li onClick={handleLogout} className="py-[6px] hover:bg-[#ccc] px-[12px]"><FontAwesomeIcon className='text-[#333] mr-[8px]' icon={faArrowRightFromBracket}></FontAwesomeIcon><span>Đăng xuất</span></li>
    </ul>
</li> );
}

export default Account;