import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Action({ isAuth, icon, quantity=false }) {
    return (
        <li className={`${!isAuth && 'hidden'}`}>
            <a
                className="relative text-[1.8rem] w-[32px] h-[32px] bg-[tranparent] inline-block text-center 
                        leading-[32px] rounded-[999px] hover:bg-[#ecf0f1] ml-[12px]"
                href="/"
            >
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
                {quantity && (
                    <span
                        className="absolute top-[-2px] right-[-3px] block bg-primary w-[18px] h-[18px] 
                                rounded-full leading-[18px] text-center text-white text-[1.2rem]"
                    >
                        {quantity}
                    </span>
                )}
            </a>
        </li>
    );
}

export default Action;
