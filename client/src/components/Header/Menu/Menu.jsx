import MenuItem from './MenuItem';
function Menu() {
    return (
        <ul className="flex h-auto">
            <MenuItem to="/" content="HOME"/>
            <MenuItem to="/products" content="PRODUCTS"/>
            <MenuItem to="/orders" content="ORDERS"/>
            <MenuItem to="/" content="BLOG"/>
            <MenuItem to="/" content="CONTACT"/>
        </ul>
    );
}

export default Menu;
