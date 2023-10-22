import SidebarItem from "../../components/Sidebar/SidebarItem";
import ProductItem from './ProductList/ProductItem'
function ProductPage() {
    return (
        <div className="flex pt-[8rem]">
            <div className="w-[24%]">
                <SidebarItem title={"Categories"} items={['Men', 'Women','Kids']}/>
                <SidebarItem checkbox  title={"Brand"} items={['Men', 'Women','Kids']}/>
            </div>
            <div className="flex-1">
                <div>
                    <h1 className="text-[2.2rem]">sort and search here</h1>
                </div>
                <div className="grid grid-cols-4 gap-[24px]">
                    <ProductItem image="women1.webp" name="Áo choàng lửa" category="Áo khoác" price={"120.000"}/>
                    <ProductItem image="women2.webp" name="Áo choàng lửa" category="Áo khoác" price={"120.000"}/>
                    <ProductItem image="women3.webp" name="Áo choàng lửa" category="Áo khoác" price={"120.000"}/>
                    <ProductItem image="women2.webp" name="Áo choàng lửa" category="Áo khoác" price={"120.000"}/>
                    <ProductItem image="men3.webp" name="Áo choàng lửa" category="Áo khoác" price={"120.000"}/>
                    <ProductItem image="women3.webp" name="Áo choàng lửa" category="Áo khoác" price={"120.000"}/>
                    <ProductItem image="women4.webp" name="Áo choàng lửa" category="Áo khoác" price={"120.000"}/>
                    <ProductItem image="men1.webp" name="Áo choàng lửa" category="Áo khoác" price={"120.000"}/>
                    <ProductItem image="men2.webp" name="Áo choàng lửa" category="Áo khoác" price={"120.000"}/>
                    <ProductItem image="men3.webp" name="Áo choàng lửa" category="Áo khoác" price={"120.000"}/>
                    <ProductItem image="men4.webp" name="Áo choàng lửa" category="Áo khoác" price={"120.000"}/>
                    <ProductItem image="men2.webp" name="Áo choàng lửa" category="Áo khoác" price={"120.000"}/>
                    <ProductItem image="men1.webp" name="Áo choàng lửa" category="Áo khoác" price={"120.000"}/>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
