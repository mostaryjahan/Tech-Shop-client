const Card = ({ product }) => {
  const localDate = new Date(product.creationDate).toLocaleString();

  return (
    // <div className="bg-gray-100 border-blue-800 border-2 rounded shadow-lg p-4 m-4">
    //   <figure className="bg-white">
    //     <img
    //       src={product.productImage}
    //       alt={product.productName}
    //       className="h-[200px] w-full "
    //     />
    //   </figure>
    //   <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
    //   <p className="text-gray-700 mb-2">{product.description}</p>
    //   <p className="font-bold text-blue-900">Price: ${product.price}</p>
    //   <p className="text-yellow-500 ">Rating: {product.ratings} / 5</p>
    //   <p className="text-gray-800">Category: {product.category}</p>
    //   <p className="text-gray-800">Creaction Date: {localDate}</p>{" "}
    // </div>

    <div className="max-w-lg p-4 border-2 rounded border-blue-800 shadow-md bg-gray-100 dark:text-gray-800">
      <div className="flex text-blue-800 mb-1 justify-between  border-bottom">
         <p>{product.category}</p>
         <p>{product.brandName}</p>

       
      </div>
      <div className="space-y-4">
        <div className="space-y-2 ">
          <img
            src={product.productImage}
            alt={product.productName}
            className="block object-cover object-center w-full rounded-md h-72 "
          />
          <div className="flex items-center text-sm">
            <p>Price: ${product.price}</p>
          </div>
        </div>
        <div className="">
            <h3 className="text-xl font-semibold dark:text-violet-600">
            {product.productName}
            </h3>
          <p className="leading-snug dark:text-gray-600">
            {product.description}
          </p>
            <p className="text-gray-800"> <span className="font-medium">Creation Date: </span> {localDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
