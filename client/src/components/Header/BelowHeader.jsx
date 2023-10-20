import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,  faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu/Menu'
function BelowHeader() {
    return ( 
        <div className="bg-[white]   shadow-md">
                <div className="w-[80%] h-[74px] mx-auto flex justify-between items-center">
                    <h1 className="text-[22px] font-bold">COLOSHOP</h1>
                    <Menu/>
                    <ul className="flex h-auto">
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
                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a
                                className="relative text-[1.8rem] w-[32px] h-[32px] bg-[tranparent] inline-block text-center 
                        leading-[32px] rounded-[999px] hover:bg-[#ecf0f1] ml-[12px]"
                                href="/"
                            >
                                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                                <span className='absolute top-[-2px] right-[-3px] block bg-[#FFC312] w-[18px] h-[18px] 
                                rounded-full leading-[18px] text-center text-[white] text-[1.2rem]'>1</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
     );
}

export default BelowHeader;