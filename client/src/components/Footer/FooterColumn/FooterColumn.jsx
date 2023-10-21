import FooterItem from "./FooterItem";

function FooterColumn({title, content = []}) {
    return (
        <div>
            <h1 className="text-[1.4rem] text-[#333333] font-bold mt-[40px] mb-[20px]">{title}</h1>
            {
                content.map((item) => <FooterItem item={item.title} icon={item.icon}/>)
            }
        </div>
    );
}

export default FooterColumn;
