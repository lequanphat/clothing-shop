function Button({content , fullwidth,...props}) {
    let styles = {}
    if(fullwidth){
        styles.width = '100%'
    }
    return (
        <button {...props} style={styles} className="bg-primary text-[white] font-medium text-[1.6rem] py-[8px] px-[24px] rounded-[2px] uppercase">
           {content}
        </button>
    );
}

export default Button;
