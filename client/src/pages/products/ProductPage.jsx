import { useEffect, useState } from 'react';
import SidebarItem from '../../components/Sidebar/SidebarItem';
import ProductItem from './ProductList/ProductItem';
import { getAllProducts } from '../../api/internal';
import ClipLoader from 'react-spinners/ClipLoader';

function ProductPage() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async function callApi() {
            const response = await getAllProducts();
            setTimeout(() => {
                console.log(response);
                setProducts(response.data);
            }, 1000);
        })();
        // cleanup function
        setProducts([]);
    }, []);

    return (
        <div className="flex pt-[8rem]">
            <div className="w-[24%]">
                <SidebarItem title={'Categories'} items={['Men', 'Women', 'Kids']} />
                <SidebarItem checkbox title={'Brand'} items={['Men', 'Women', 'Kids']} />
            </div>
            <div className="flex-1">
                <div>
                    <h1 className="text-[2.2rem]">sort and search here</h1>
                </div>
                {products.length === 0 && (
                        <div className="w-[100%] min-h-[360px] flex items-center justify-center">
                            <ClipLoader size={35} color="#36d7b7" loading={true} speedMultiplier={1} />
                        </div>
                    )}
                <div className="grid grid-cols-4 gap-[24px]">
                    
                    {products.map((product, index) => (
                        <ProductItem
                            key={index}
                            image={product.image}
                            name={product.title}
                            category={product.category}
                            price={product.price}
                        />
                    ))}
                    {/* <ProductItem image="women1.webp" name="Áo choàng lửa" category="Áo khoác" price={"120.000"}/>
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
                    <ProductItem image="men1.webp" name="Áo choàng lửa" category="Áo khoác" price={"120.000"}/> */}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
