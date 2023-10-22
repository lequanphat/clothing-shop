// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstalod, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
function AboveHeader() {
    return (
        <div className="bg-[black]">
            <div className="w-[85%] mx-auto flex justify-between align-middle h-[30px]">
                <h2 className="text-[#ccc] text-[12px] align-middle leading-[30px]">FREE SHIPPING ON ALL US ORDERS OVER $50</h2>
                <ul className="flex items-center justify-end ">
                    <div className="flex items-center">
                        <p className="text-[#ccc] text-[1.4rem] mr-[5px]">QuanPhat</p>
                        <img className="w-[23px] h-[23px] rounded-full" src="/images/me.png" alt="avt"/>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default AboveHeader;
