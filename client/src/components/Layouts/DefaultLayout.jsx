import Header from "../Header/Header";
import Slider from "../Slider/Slider";

function DefaultLayout({children}) {
    return ( 
    <div>
        <Header/>
        <Slider></Slider>
        <div className="w-[80%] mx-auto  ">
            {children}
        </div>
    </div> 
    );
}

export default DefaultLayout;