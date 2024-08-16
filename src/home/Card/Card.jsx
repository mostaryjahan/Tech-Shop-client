import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Card = ({ product }) => {
  const localDate = new Date(product.creationDate).toLocaleString();

  return (
    <div className="max-w-lg p-4 border-2 rounded border-blue-800 shadow-md bg-gray-100 dark:text-gray-800">
      <div className="flex text-blue-800 mb-1 justify-between  border-bottom">
        <p>{product.category}</p>
        <p>{product.brandName}</p>
      </div>
      <div className="space-y-1 ">
        <div className="space-y-2">
          <img
            src={product.productImage}
            alt={product.productName}
            className="block object-cover object-center w-full rounded-md h-72 "
          />
          <div className="flex items-center justify-between text-sm">
            <p>Price: ${product.price}</p>
            <Rating
              style={{ maxWidth: 100 }}
              value={product.ratings}
              readOnly
            />
          </div>
        </div>
        <div className="">
          <h3 className="text-xl font-semibold dark:text-violet-600">
            {product.productName}
          </h3>
          <p className="leading-snug dark:text-gray-600">
            {product.description}
          </p>
          <p className="text-gray-800">
            {" "}
            <span className="font-medium">Creation Date: </span> {localDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
