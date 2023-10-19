import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCartShopping,  faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import routes from '../../routes';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
function Header() {
    return (
        <header>
            <div className="bg-[black]">
                <div className="w-[80%] mx-auto flex justify-between align-middle h-[4.5rem]">
                    <h2 className="text-[#ccc] align-middle leading-[4.5rem]">
                        FREE SHIPPING ON ALL US ORDERS OVER $50
                    </h2>
                    <ul className="flex align-middle justify-end ">
                        <li className="border-r-[1px] border-[#7f8c8d]">
                            <select className="h-[100%] text-[#ccc] bg-[black] outline-none text-[1.3rem] px-[8px]">
                                <option>USD</option>
                                <option>Euro</option>
                                <option>VND</option>
                            </select>
                        </li>
                        <li className="border-r-[1px] border-[#7f8c8d]">
                            <select className="h-[100%] text-[#ccc] bg-[black] outline-none text-[1.3rem] px-[8px]">
                                <option>English</option>
                                <option>Vietnamese</option>
                                <option>Thailand</option>
                            </select>
                        </li>
                        <li>
                            <select className="h-[100%] text-[#ccc] bg-[black] outline-none text-[1.3rem] ">
                                <option>Quan Phát</option>
                                <option>Đăng xuất</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-[white]   shadow-md">
                <div className="w-[80%] h-[100px] mx-auto flex justify-between items-center">
                    <h1 className="text-[22px] font-bold">COLOSHOP</h1>
                    <ul className="flex h-auto">
                        <li><Link className='text-[1.4rem] font-bold px-[20px] py-[4px] hover:bg-primary' to="/">HOME</Link></li>
                        <li><Link className='text-[1.4rem] font-bold px-[20px] py-[4px]' to="/products">SHOP</Link></li>
                        <li><Link className='text-[1.4rem] font-bold px-[20px] py-[4px]' to="/orders">PROMOTION</Link></li>
                        <li><Link className='text-[1.4rem] font-bold px-[20px] py-[4px]' to="/123">PAGES</Link></li>
                        <li><Link className='text-[1.4rem] font-bold px-[20px] py-[4px]' to="/123">BLOG</Link></li>
                        <li><Link className='text-[1.4rem] font-bold px-[20px] py-[4px]' to="/123">CONTACT</Link></li> 
                        

                        
                    </ul>
                    <ul className="flex h-auto">
                        <li>
                            <a
                                className="text-[1.6rem] w-[32px] h-[32px] bg-[tranparent] inline-block text-center 
                        leading-[32px] rounded-[999px] hover:bg-[#ecf0f1] "
                                href="/"
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-[1.6rem] w-[32px] h-[32px] bg-[tranparent] inline-block text-center 
                        leading-[32px] rounded-[999px] hover:bg-[#ecf0f1] ml-[12px]"
                                href="/"
                            >
                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-[1.6rem] w-[32px] h-[32px] bg-[tranparent] inline-block text-center 
                        leading-[32px] rounded-[999px] hover:bg-[#ecf0f1] ml-[12px]"
                                href="/"
                            >
                                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
