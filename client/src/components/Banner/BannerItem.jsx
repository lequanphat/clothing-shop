function BannerItem({image, content}) {
    const url = '/images/'+image
    return (
        <div className="group relative">
            <img  src={url} alt="banner" />
            <div
                className="hidden group-hover:block transition-all absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[70%] h-[70%] 
                border-[8px] border-[rgba(255,255,255,0.6)]"
            ></div>
            <div className="absolute top-[70%] left-[50%] translate-x-[-50%]  bg-[white]">
                <h1 className="text-[2.8rem] font-medium px-[14px] py-[2px]">{content}</h1>
            </div>
        </div>
    );
}

export default BannerItem;
