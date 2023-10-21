import BlogItem from "../../../components/Blog/BlogItem";

function FromTheBlog() {
    return (
        <div>
            <h1
                after=""
                className=" relative text-[3.6rem] text-center font-medium
            after:absolute after:contents(attr(after)) after:bg-primary after:top-[60px] after:left-[50%] after:w-[100px] after:h-[3px] after:translate-x-[-50%]"
            >
                From The Blog
            </h1>
            <div className="grid grid-cols-3 gap-[50px] pt-[60px]">
                <BlogItem title={"The Best Street Style From London Fashion Week"} desc={"Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"} time={"May 4, 2019"} comments={"12"} image={"blog1.webp"}/>
                <BlogItem title={"The Best Street Style From London Fashion Week"} desc={"Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"} time={"May 4, 2019"} comments={"12"} image={"blog2.webp"}/>
                <BlogItem title={"The Best Street Style From London Fashion Week"} desc={"Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat"} time={"May 4, 2019"} comments={"12"} image={"blog3.webp"}/>
            </div>
        </div>
    );
}

export default FromTheBlog;
