import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ControlItem from '../../../../components/Slider/Control/ControlItem';
import PointItem from '../../../../components/Slider/Control/PointItem';
import BestSellerSliderItem from './BestSellerSliderItem';
import { useState } from 'react';

function BestSellerSlider({slideTitle, products}) {
    const [page, setPage] = useState(0);
    const nextSlide = () => {
        if(page+1 >= products.length-2){
            setPage(0);
        }else{
            setPage(page+1);
        }
    }
    const preSlide = () => {
        if(page-1 <0){
            setPage(products.length-3);
        }else{
            setPage(page-1);
        }
    }
    return (
        <div className="flex-1 flex flex-col items-center pb-[20px]">
            <h1 className="text-[2.4rem] ">{slideTitle}</h1>
            <div className="flex items-center px-[20px] py-[20px] justify-between w-[100%]">
                <ControlItem icon={faChevronLeft} click={preSlide} />
                <div className="w-[90%] h-[480px] overflow-hidden  relative   ">
                    <div className="flex  w-[200%] h-[100%]  absolute top-[0]  " style={{ left: page*-33.33 + '%' }}>
                        {products.map((product, index) => {
                            product.key = index;
                            return <BestSellerSliderItem {...product} />;
                        })}
                    </div>
                </div>

                <ControlItem icon={faChevronRight} click={nextSlide} />
            </div>
            <PointItem total={products.length - 2} index={page} />
        </div>
    );
}

export default BestSellerSlider;
