import ControlItem from './Control/ControlItem';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PointItem from './Control/PointItem';
import SlideItem from './SlideItem';
import { useEffect,  useState } from 'react';
const images = ['slide1.webp', 'slide2.webp', 'slide3.webp', 'slide4.webp', 'slide5.webp'];
function Slider() {
    const [index, setIndex] = useState(0);
    const nextSlide = () => {
        if (index + 1 >= images.length) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };
    const preSlide = () => {
        if (index - 1 < 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(index - 1);
        }
    };
    

    console.log('slide render');
    return (
        <div className="relative w-[100%] h-[400px] z-1 mt-[104px]">
            <SlideItem value={images[index]} />
            <ControlItem icon={faChevronLeft} position="left" click={preSlide} />
            <ControlItem icon={faChevronRight} position="right" click={nextSlide} />
            <PointItem total={images.length} index={index} />
            <div className="absolute top-[20%] left-[50%] w-[80%]  translate-x-[-50%] ">
                <h1 className="text-[#F79F1F] text-[1.8rem] font-medium uppercase">My Bag</h1>
                <h1 className="text-[black] text-[5.4rem] font-medium">Black friday</h1>
                <p className="text-[#bbb] text-[1.6rem] w-[500px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore
                </p>
                <button className="bg-[#F79F1F] text-[white] font-medium text-[1.6rem] py-[8px] px-[24px] rounded-[2px] mt-[30px] ">
                    SHOP NOW
                </button>
            </div>
            <div className="absolute top-[30%] right-[12%] w-[140px] h-[140px] bg-[#F79F1F] rounded-full p-[6px]">
                <div className="border-dashed border-[white] border-[2px] rounded-full w-[100%] h-[100%]">
                    <h1 className="text-[white] text-[3.2rem] font-medium text-center mt-[12px]">SALE</h1>
                    <h1 className="text-[white] text-[3.2rem] font-medium text-center ">50%</h1>
                </div>
            </div>
        </div>
    );
}

export default Slider;
