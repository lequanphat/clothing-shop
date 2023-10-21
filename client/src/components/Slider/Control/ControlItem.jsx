import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ControlItem({icon, pos, click, ...props}) {
    const styles = {
        [pos]: '25px',
        ...props
    }
    return (
        <p style={styles} className="w-[40px] h-[40px] text-[2.4rem]  text-[#7f8c8d] text-center leading-[40px] rounded-full cursor-pointer" onClick={() => {click()}}>
            <FontAwesomeIcon icon={icon} />
        </p>
    );
}

export default ControlItem;
