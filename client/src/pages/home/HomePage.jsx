import Banner from '../../components/Banner/Banner'
import BestSeller from './bestseller/BestSeller';
const HomePage = () => {
    return (
        <div>
            <Banner/>
            <BestSeller image="bestsellerforwomen.webp" title="Women's" slideTitle="BestSeller for Women"/>
            <BestSeller image="bestsellerformen.webp"  reverse title="Men's"  slideTitle="BestSeller for Men"/>
        </div>
    )
};

export default HomePage;
