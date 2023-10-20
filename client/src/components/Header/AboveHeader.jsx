function AboveHeader() {
    return (
        <div className="bg-[black]">
            <div className="w-[80%] mx-auto flex justify-between align-middle h-[36px]">
                <h2 className="text-[#ccc] align-middle leading-[36px]">FREE SHIPPING ON ALL US ORDERS OVER $50</h2>
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
    );
}

export default AboveHeader;
