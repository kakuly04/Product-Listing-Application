
// --------------------- Home Functionality ----------------------
// This is the Home component that displays all product listings
// It fetches the product data from an API and displays it using the ProductList component
// It also handles loading states and errors during the fetch process

import useFetch from "../useFetch";
import ProductList from "./ProductList";
import MyCarousel from '../Carousel';

const Home = ({viewMode, searchQuery}) => {

    const {data: listings, isPending, error} = useFetch('https://dummyjson.com/products');
    // The useFetch hook (custom hook), is used to fetch data from the API endpoint
    // listings is the data fetched from the API, isPending is a boolean indicating if the data is still being fetched, and error is any error that occurred during the fetch
    
    return (
        <div className="home">
            <MyCarousel />
            <h2>Welcome! What would you like to shop today?</h2>
            {error && (
                <div className="error">
                    <p>Failed to load products.</p>
                    <p>Error: {error}</p>
                    <p>Please try refreshing the page.</p>
                </div>
            )}
            {isPending && <div>Loading...</div>}
            {listings && <ProductList products_listing = {listings} viewMode={viewMode} searchQuery={searchQuery}/>}
        </div>
    );
}

export default Home;