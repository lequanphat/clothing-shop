import BlogItem from "../../../components/Blog/BlogItem";

function FromTheBlog() {
    return (
        <div>
            <h1
                after=""
                className=" relative text-[2.8rem] text-center font-medium uppercase
            after:absolute after:contents(attr(after)) after:bg-primary after:top-[60px] after:left-[50%] after:w-[100px] after:h-[3px] after:translate-x-[-50%]"
            >
                BÀI VIẾT GẦN ĐÂY
            </h1>
            <div className="grid grid-cols-3 gap-[50px] pt-[60px]">
                <BlogItem large likes={10} title={"Thời trang đường phố tại tuần lễ thời trang London"} desc={"Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"} time={"23/04/2019"} comments={"12"} image={"blog1.webp"}/>
                <BlogItem large likes={4} title={"Lưu giữ những khoảnh khắc tuyệt vời bên bạn bè"} desc={"Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"} time={"May 4, 2019"} comments={"12"} image={"blog2.webp"}/>
                <BlogItem large likes={22} title={"Niềm đam mê bất tận với thời trang"} desc={"Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"} time={"May 4, 2019"} comments={"12"} image={"blog3.webp"}/>
            </div>
        </div>
    );
}

export default FromTheBlog;
