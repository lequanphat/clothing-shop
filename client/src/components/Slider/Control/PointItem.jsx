
function PointItem({total, index, ...props}) {
    const render = () => {
        const items= []
        for(let i=0;i<total;i++){
            if(i===index){
                items.push(<li key={i} className="w-[20px] h-[10px] bg-[#7f8c8d] rounded-full mx-[12px] transition-all"></li>);
            }else{
                items.push(<li key={i} className="w-[10px] h-[10px] bg-[#7f8c8d] rounded-full mx-[12px] transition-all"></li>);
            }
            
        }
        return items;
    }
    const styles = {
        ...props
    }
    return (
        <ul style={styles} className="flex">
        {render()}
        </ul>
    );
}

export default PointItem;
