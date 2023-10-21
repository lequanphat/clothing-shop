import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function FooterItem({item, icon}) {
    return ( 
        <p className="text-[1.4rem] mb-[12px]">{icon && <FontAwesomeIcon icon={icon} style={{ marginRight:'6px' }}/>}{item}</p>
     );
}
export default FooterItem;