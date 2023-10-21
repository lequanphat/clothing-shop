import BestSellerSlider from './slider/BestSellerSlider';

function BestSeller({ reverse, title,slideTitle, image, products }) {
    let styles;
    let url = '/images/' + image;
    if (reverse) {
        styles = {
            flexDirection: 'row-reverse',
        };
    }
    return (
        <div className="flex py-[60px]" style={styles}>
            <div className="w-[24%] relative">
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h1 className='text-[4.2rem] text-[white] text-center font-medium mb-[20px]'>{title}</h1>
                    <h1 className='text-[2.1rem] text-[white] underline text-center'>Discover More</h1>
                </div>
                <img className="w-[100%] h-[100%] bg-[#efefef]" src={url} alt="img"></img>
            </div>
            <BestSellerSlider slideTitle={slideTitle} products={products} />
        </div>
    );
}

export default BestSeller;
