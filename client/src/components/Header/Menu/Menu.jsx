import MenuItem from './MenuItem';
function Menu() {
    return (
        <ul className="flex h-auto">
            <MenuItem to="/" content="trang chủ"/>
            <MenuItem to="/products" content="sản phẩm"/>
            <MenuItem to="/orders" content="giỏ hàng"/>
            <MenuItem to="/blogs" content="bài viết"/>
            <MenuItem to="/" content="liên hệ"/>
        </ul>
    );
}

export default Menu;
