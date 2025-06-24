import useFetch from "../useFetch";
import ProductList from "./ProductList";
const Home = ({viewMode, searchQuery}) => {
    const {data: listings, isPending, error} = useFetch('https://dummyjson.com/products');
    
    return (
        <div className="home">
            <h2>All Listings</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {listings && <ProductList products_listing = {listings} viewMode={viewMode} searchQuery={searchQuery}/>}
        </div>
    );
}

export default Home;