function CustomerServiceItem({ title, desc, icon}) {
    const url = '/images/' + icon;
    return (
        <div className="flex items-center justify-center py-[28px] border-r-[1px] border-r-[#ebebeb] last:border-0">
            <div className="flex items-center">
                <div className="mr-[22px] w-[40px] h-[40px]">
                    <img className="w-[100%] h-[100%]" src={url} alt="img" />
                </div>
                <div>
                    <h1 className="text-[1.7rem] font-medium uppercase">{title}</h1>
                    <p className="text-[1.6rem]">{desc}</p>
                </div>
            </div>
        </div>
    );
}

export default CustomerServiceItem;
