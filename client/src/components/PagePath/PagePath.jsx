import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faChevronRight } from '@fortawesome/free-solid-svg-icons';
function PagePath() {
    return (
        <div className="mt-[104px] border-b-[1px] border-b-[rgb(235,235,235)]">
            <p className="text-[1.6rem] py-[1.5rem] flex items-center">
                <FontAwesomeIcon className="text-[1.4rem] mr-[4px] text-[#333]" icon={faHouseChimney} /> <span>Home</span>
                <FontAwesomeIcon className="text-[1.0rem] mx-[8px] text-[#B2B2B2]" icon={faChevronRight} /> <span className='text-[#B2B2B2]'>Shop</span>
            </p>
        </div>
    );
}

export default PagePath;
