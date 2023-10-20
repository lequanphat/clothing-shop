function SlideItem({value}) {
    const styles = {
        backgroundImage: 'url(/images/'+value+')'
    }
    return ( 
        <div style={styles} className="absolute top-[0] left-[0] w-[100%] h-[100%] bg-cover transition-all"></div>
    )
}
export default SlideItem;