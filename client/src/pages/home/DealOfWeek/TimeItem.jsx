function TimeItem({value, unit}) {
    return (
        <div className="bg-[white]  rounded-[4px] p-[12px]">
            <h1 className="text-[3.6rem] text-primary font-medium text-center">{value}</h1>
            <h1 className="text-[1.8rem] text-[#333] text-center opacity-[0.5]">{unit}</h1>
        </div>
    );
}

export default TimeItem;
