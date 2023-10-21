import Footer from "../Footer/footer";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";

function DefaultLayout({children}) {
    return ( 
    <div>
        <Header/>
        <Slider></Slider>
        <div className="w-[85%] mx-auto  ">
            {children}
        </div>
        <Footer/>
    </div> 
    );
}

export default DefaultLayout;