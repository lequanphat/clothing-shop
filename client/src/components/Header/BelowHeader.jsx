import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,  faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import Menu from './Menu/Menu'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function BelowHeader() {
    const navigate = useNavigate()
    
    return ( 
        <div className="bg-[white]   shadow-md">
                <div className="w-[85%] h-[74px] mx-auto flex justify-between items-center">
                    <h1 className="text-[22px] font-bold">E-FOSSHOP</h1>
                    <Menu/>
                    <ul className="flex h-auto items-center">
                        <li>
                            <a
                                className="text-[1.8rem] w-[32px] h-[32px] bg-[tranparent] inline-block text-center 
                        leading-[32px] rounded-[999px] hover:bg-[#ecf0f1] "
                                href="/"
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-[1.8rem] w-[32px] h-[32px] bg-[tranparent] inline-block text-center 
                        leading-[32px] rounded-[999px] hover:bg-[#ecf0f1] ml-[12px]"
                                href="/"
                            >
                                <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a
                                className="relative text-[1.8rem] w-[32px] h-[32px] bg-[tranparent] inline-block text-center 
                        leading-[32px] rounded-[999px] hover:bg-[#ecf0f1] ml-[12px]"
                                href="/"
                            >
                                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                                <span className='absolute top-[-2px] right-[-3px] block bg-primary w-[18px] h-[18px] 
                                rounded-full leading-[18px] text-center text-[white] text-[1.2rem]'>1</span>
                            </a>
                        </li>
                        
                        <li className='ml-[20px]'>
                            <Button small textSize="1.2rem" content="Đăng nhập" onClick={() => {navigate('/login')}}/>
                        </li>
                    </ul>
                </div>
            </div>
     );
}

export default BelowHeader;