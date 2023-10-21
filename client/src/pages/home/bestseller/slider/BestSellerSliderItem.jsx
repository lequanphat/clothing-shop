function BestSellerSliderItem({image, name, price, category}) {
    const url = '/images/'+image;
    return (
        <div className="p-[10px] w-[33.33%]">
            <img className=" w-[100%] h-[340px]" src={url} alt="img" />
            <h2 className="text-center text-[1.4rem] font-medium text-[#b2b2b2] mt-[20px] mb-[4px] uppercase">{category}</h2>
            <h1 className="text-center text-[2.0rem] capitalize">{name}</h1>
            <h1 className="text-center text-[#f1c40f] text-[2.2rem] font-medium">${price}</h1>
        </div>
    );
}

export default BestSellerSliderItem;
