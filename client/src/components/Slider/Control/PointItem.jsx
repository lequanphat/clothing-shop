
function PointItem({total, index}) {
    const render = () => {
        console.log(total);
        const items= []
        for(let i=0;i<total;i++){
            if(i===index){
                items.push(<li key={i} className="w-[20px] h-[10px] bg-primary rounded-full mx-[12px] transition-all"></li>);
            }else{
                items.push(<li key={i} className="w-[10px] h-[10px] bg-primary rounded-full mx-[12px] transition-all"></li>);
            }
            
        }
        return items;
    }
    return (
        <ul className="absolute bottom-[2%] left-[50%] translate-x-[-50%]  flex">
        {render()}
        </ul>
    );
}

export default PointItem;
