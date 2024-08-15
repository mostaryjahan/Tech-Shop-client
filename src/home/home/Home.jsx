import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card'; 

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setProducts(response.data);
                console.log('Fetched Products:', response.data); 
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2'>
                {products.length > 0 ? (
                    products.map((product) => (
                        <Card key={product._id} product={product} />
                    ))
                ) : (
                    <p>Loading products...</p>
                )}
            </div>
        </div>
    );
};

export default Home;
