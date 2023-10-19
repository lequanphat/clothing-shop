import Header from "../Header/Header";

function DefaultLayout({children}) {
    return ( 
    <div>
        <Header/>
        <div className="w-[80%] mx-auto  ">
            {children}
        </div>
    </div> 
    );
}

export default DefaultLayout;