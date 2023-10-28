import Button from "../../../components/Button/Button";
import TimeItem from "./TimeItem";

function DealOfWeek() {
    return (
        <div className="flex bg-[#f4f1e9] p-[50px] ">
            <div className="flex flex-col items-center flex-1 justify-start">
                <h1 className="text-[3.2rem] mb-[10px]">Deal Of The Week</h1>
                <div className="w-[80px] border-[2px] border-primary mb-[28px]"></div>
                <p className="text-[1.8rem] w-[90%] opacity-[0.6] text-center mb-[18px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, seddo ipsum dolor sit amet, consectetur
                    adipisicing elit
                </p>
                <h1 className="text-[2.6rem] font-medium text-primary mb-[42px]">235.000đ</h1>
                <div className="grid grid-cols-4 gap-[30px] mb-[24px]">
                    
                    <TimeItem value={30} unit="DAYS"/>
                    <TimeItem value={12} unit="HRS"/>
                    <TimeItem value={23} unit="MINS"/>
                    <TimeItem value={12} unit="SECS"/>
                    
                </div>
                <Button primary medium content="xem ngay"/>
            </div>
            <div className="flex-1 flex items-center justify-center"><img className="w-[400px] h-[400px]" src="/images/men4.webp" alt="img" /></div>
        </div>
    );
}

export default DealOfWeek;
