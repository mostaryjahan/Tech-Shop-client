
const Card = ({ product }) => {
    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <img src={product.productImage} alt={product.productName} style={{ width: '200px', height: '200px' }} />
            <h3>{product.productName}</h3>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Rating:</strong> {product.ratings} / 5</p>
            <p><strong>Category:</strong> {product.category}</p>
        </div>
    );
};

export default Card;
