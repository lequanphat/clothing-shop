function Wrapper({ title, footerDesc, footerButton, eventAction, children }) {
    return (
        <div className="w-[100%] h-[100%] bg-[white] rounded-[3px] border-[2px] border-[#777]">
            <div className="pt-[32px]">
                <h1 className="text-center text-[1.9rem] font-medium uppercase ">{title}</h1>
            </div>
            <div className="p-[40px] ">
                {children}
                <div className="text-[1.6rem] mt-[12px]">
                    <span>{footerDesc}</span>
                    <span className="text-primary ml-[4px] cursor-pointer" onClick={eventAction}>
                        {footerButton}
                    </span>
                </div>
            </div>
        </div>
    );
}
export default Wrapper;
