import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ControlItem({icon, position, click}) {
    const styles = {
        [position]: '60px'
    }
    return (
        <p style={styles} className="absolute top-[50%]  w-[40px] h-[40px] text-[2.4rem]  text-[#333] text-center leading-[40px] rounded-full cursor-pointer" onClick={() => {click()}}>
            <FontAwesomeIcon icon={icon} />
        </p>
    );
}

export default ControlItem;
