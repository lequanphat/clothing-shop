import BlogItem from "../../components/Blog/BlogItem";

function BlogPage() {
    return ( 
        <div className="flex mt-[60px]">
            <div className="w-[24%]">1</div>
            <div className="flex-1">
                <div className="grid grid-cols-3 gap-[20px] gap-y-[20px]">
                <BlogItem short likes={12} 
                    author={"USER 1"} 
                    title={"Thời trang đường phố tại tuần lễ thời trang London"} 
                    desc={"Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"} 
                    time={"23/04/2019"} comments={"12"} 
                    image={"women1.webp"}/>
                <BlogItem short likes={8} 
                    author={"USER 2"} 
                    title={"Lưu giữ những khoảnh khắc tuyệt vời bên bạn bè"} 
                    desc={"Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"} 
                    time={"May 4, 2019"} comments={"12"} 
                    image={"blog2.webp"}/>
                <BlogItem short likes={34} 
                    author={"USER 3"} 
                    title={"Niềm đam mê bất tận với thời trang"} 
                    desc={"Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"} 
                    time={"May 4, 2019"} comments={"12"} 
                    image={"blog3.webp"}/>
                <BlogItem short likes={34} 
                    author={"USER 1"} 
                    title={"Niềm đam mê bất tận với thời trang"} 
                    desc={"Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"} 
                    time={"May 4, 2019"} comments={"12"} 
                    image={"blog3.webp"}/>
                <BlogItem short likes={34} 
                    author={"USER 1"} 
                    title={"Niềm đam mê bất tận với thời trang"} 
                    desc={"Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"} 
                    time={"May 4, 2019"} comments={"12"} 
                    image={"blog3.webp"}/>
                <BlogItem short likes={34} 
                    author={"USER 1"} 
                    title={"Niềm đam mê bất tận với thời trang"} 
                    desc={"Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"} 
                    time={"May 4, 2019"} comments={"12"} 
                    image={"blog3.webp"}/>
                </div>
            </div>
        </div>
     );
}

export default BlogPage;