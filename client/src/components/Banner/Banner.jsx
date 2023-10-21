import BannerItem from "./BannerItem";

const images = [
    {
        image: 'banner1.webp',
        content: 'Nam'
    },
    {
        image: 'banner2.webp',
        content: 'Nữ'
    },
    {
        image: 'banner3.webp',
        content: 'Trẻ em'
    },
]
function Banner() {
    return (
        <div className="grid grid-cols-3 py-[30px] gap-[30px]">
          <BannerItem image={images[0].image} content={images[0].content}/>  
          <BannerItem image={images[1].image} content={images[1].content}/>  
          <BannerItem image={images[2].image} content={images[2].content}/>  
        </div>
    );
}

export default Banner;
