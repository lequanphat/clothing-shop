import ControlItem from './Control/ControlItem';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PointItem from './Control/PointItem';
import SlideItem from './SlideItem';
import { useEffect,  useState } from 'react';
import Button from '../Button/Button';
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
    // useEffect(() => {
    //     setTimeout(() => {
    //         nextSlide()
    //     }, 3000)
    // }, [index])

    console.log('slide render');
    return (
        <div className="relative w-[100%] h-[400px] z-1">
            <SlideItem value={images[index]} />
            <ControlItem icon={faChevronLeft} pos="left" click={preSlide} top="50%" position="absolute"/>
            <ControlItem icon={faChevronRight} pos="right" click={nextSlide} top="50%" position="absolute"/>
            <PointItem total={images.length} index={index} position="absolute" bottom="2%" left="50%" transform="translateX(-50%)"/>
            <div className="absolute top-[20%] left-[50%] w-[85%]  translate-x-[-50%] ">
                <h1 className="text-[black] text-[2.4rem] font-medium uppercase tracking-[2px]">Black friday </h1>
                <h1 className="text-primary text-[4.2rem] uppercase italic font-[600]">SALE UP TO 50%</h1>
                <p className="text-[#7a7878] text-[1.6rem] w-[500px] mb-[20px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore
                </p>
                <Button primary medium content="xem ngay"/>
            </div>
            
        </div>
    );
}

export default Slider;
