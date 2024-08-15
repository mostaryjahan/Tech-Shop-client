import { useEffect, useState } from 'react';
import axios from 'axios';

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
            <div className='grid grid-cols-1 lg:grid cols-3'>
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                            <img src={product.productImage} alt={product.productName} style={{ width: '200px', height: '200px' }} />
                            <h3>{product.productName}</h3>
                            <p>{product.description}</p>
                            <p><strong>Price:</strong> ${product.price}</p>
                            <p><strong>Rating:</strong> {product.ratings} / 5</p>
                            <p><strong>Category:</strong> {product.category}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading products...</p>
                )}
            </div>
        </div>
    );
};

export default Home;
