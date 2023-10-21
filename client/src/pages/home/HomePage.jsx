import Banner from '../../components/Banner/Banner'
import CustomerService from './CustomerService/CustomerService';
import DealOfWeek from './DealOfWeek/DealOfWeek';
import FromTheBlog from './FromTheBlog/FromTheBlog';
import BestSeller from './bestseller/BestSeller';
const products = [
    {
        name: 'Pura Paneapple',
        category: 'COAT',
        price: '12.00',
        image: 'women1.webp',
    },
    {
        name: 'Pura Paneapple',
        category: 'COAT',
        price: '26.00',
        image: 'women2.webp',
    },
    {
        name: 'Pura Paneapple',
        category: 'COAT',
        price: '13.00',
        image: 'women3.webp',
    },
    {
        name: 'Pura Paneapple',
        category: 'COAT',
        price: '13.00',
        image: 'women4.webp',
    },
    {
        name: 'Pura Paneapple',
        category: 'COAT',
        price: '13.00',
        image: 'women1.webp',
    },
    {
        name: 'Pura Paneapple',
        category: 'COAT',
        price: '13.00',
        image: 'women2.webp',
    },
];
const products_men = [
    {
        name: 'Pura Paneapple',
        category: 'COAT',
        price: '13.00',
        image: 'men1.webp',
    },
    {
        name: 'Pura Paneapple',
        category: 'COAT',
        price: '21.00',
        image: 'men2.webp',
    },
    {
        name: 'Pura Paneapple',
        category: 'COAT',
        price: '18.00',
        image: 'men3.webp',
    },
    {
        name: 'Pura Paneapple',
        category: 'COAT',
        price: '13.00',
        image: 'men4.webp',
    },
    {
        name: 'Pura Paneapple',
        category: 'COAT',
        price: '13.00',
        image: 'men1.webp',
    },
    {
        name: 'Pura Paneapple',
        category: 'COAT',
        price: '13.00',
        image: 'men2.webp',
    },
];
const HomePage = () => {
    return (
        <div>
            <Banner/>
            <BestSeller image="bestsellerforwomen.webp" title="Women's" slideTitle="BestSeller for Women" products={products}/>
            <DealOfWeek/>
            <BestSeller image="bestsellerformen.webp"  reverse title="Men's"  slideTitle="BestSeller for Men" products={products_men}/>
            <FromTheBlog/>
            <CustomerService/>
        </div>
    )
};

export default HomePage;
