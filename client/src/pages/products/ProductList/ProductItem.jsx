function ProductItem({image, name, price, category}) {
    const url = '/images/'+image;
    return (
        <div className="">
            <img className=" w-[100%] h-[240px] bg-[#f3f1ef]" src={url} alt="img" />
            <h2 className="text-center text-[1.3rem] font-medium text-[#b2b2b2] mt-[20px] mb-[4px] uppercase">{category}</h2>
            <h1 className="text-center text-[1.8rem] capitalize">{name}</h1>
            <h1 className="text-center text-[#f1c40f] text-[2.0rem] font-medium">{price}đ</h1>
        </div>
    );
}

export default ProductItem;