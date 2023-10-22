import Footer from "../Footer/footer";
import Header from "../Header/Header";
import PagePath from '../PagePath/PagePath'
function OtherLayout({children}) {
    return ( 
    <div>
        <Header/>
        <div className="w-[85%] mx-auto  ">
            <PagePath/>
            {children}
        </div>
        <Footer/>
    </div> 
    );
}

export default OtherLayout;