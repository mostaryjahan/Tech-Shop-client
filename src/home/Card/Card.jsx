const Card = ({ product }) => {
  const localDate = new Date(product.creationDate).toLocaleString(); // Customize format if needed


  return (
    <div className="bg-gray-100 border-blue-800 border-2 rounded shadow-lg p-4 m-4">
       <figure>
        <img
          src={product.productImage}
          alt={product.productName}
          className="h-[200px] w-full"
        />
      </figure>

      <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="font-bold text-blue-900 mb-2">Price: ${product.price}</p>
      <p className="text-yellow-500 mb-2">Rating: {product.ratings} / 5</p>
      <p className="text-gray-500">Category: {product.category}</p>
                  <p className="text-gray-500">Added on: {localDate}</p> {/* Marked change: Display the formatted date */}

    </div>
  );
};

export default Card;
