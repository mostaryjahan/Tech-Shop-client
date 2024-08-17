import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        "https://server-bay-six.vercel.app/products",
        {
          params: {
            page,
            limit: 6,
            search,
            brand,
            category,
            minPrice,
            maxPrice,
            sortBy,
            sortOrder,
          },
        }
      );
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
      //edit
      if (response.data.products.length === 0) {
        setError("Searching product is not available");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Error fetching products. Please try again later.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [page, search, brand, category, minPrice, maxPrice, sortBy, sortOrder]);

  return (
    <div className="p-4">
      <Helmet>
        <title>Tech-Shop | Home</title>
      </Helmet>
      <h1 className="text-center font-rubik  text-2xl font-semibold dark:text-gray-100 mt-6">
        Welcome to Our Shop....
      </h1>
      <h1 className="text-center dark:text-gray-100  text-lg font-rubik mb-12">
        Shop smarter, live better & find your essentials and beyond
      </h1>

      {/* Search*/}
      <div className="mb-4 sm:text-center text-center">
        <div>
          <span>Search here... </span>
          <input
            type="text"
            placeholder="Search by product name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" border-blue-800 border p-2 rounded mb-2 mr-2 w-[130px] h-6 sm:w-auto sm:h-auto"
          />
        </div>
        {/* filter brands */}

        <select
          onChange={(e) => setBrand(e.target.value)}
          className="border border-blue-800 p-2 rounded mb-2 mr-2  w-[130px] sm:w-auto"
        >
          <option value="">All Brands</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="LG">LG</option>
        </select>

        {/* category */}
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 border-blue-800 rounded mb-2 mr-2  w-[130px] sm:w-auto"
        >
          <option value="">All Categories</option>
          <option value="mobile">Mobile</option>
          <option value="tv">TV</option>
          <option value="laptop">Laptop</option>
          <option value="tablet">Tablet</option>
        </select>

        {/* price filter */}
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border p-2 border-blue-800 rounded mb-2 mr-2 w-[130px] sm:w-auto"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 border-blue-800 rounded mb-2 mr-2 w-[130px] sm:w-auto"
        />

        {/* sort by */}
        <select
          onChange={(e) => {
            const value = e.target.value;
            if (value === "price-asc") {
              setSortBy("price");
              setSortOrder("asc");
            } else if (value === "price-desc") {
              setSortBy("price");
              setSortOrder("desc");
            } else if (value === "date-desc") {
              setSortBy("creationDate");
              setSortOrder("desc");
            }
          }}
          className="border border-blue-800 p-2 rounded mb-2 mr-2"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
          <option value="date-desc">Date (Newest)</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4">
        {loading ? (
          <div className="flex justify-between items-center gap-6 mx-auto">
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-sm"></span>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center">
            <p className="text-red-500 font-semibold">{error}</p>
          </div>
        ) : products.length > 0 ? (
          products.map((product) => (
            <Card key={product._id} product={product} />
          ))
        ) : (
          <div className="flex justify-center items-center">
            <p className="text-gray-500">No products available.</p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center items-center">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="bg-blue-900 text-white border px-3 py-1 mx-1 rounded"
        >
          Previous
        </button>
        <span className="px-3 py-1 mx-1">{`Page ${page} of ${totalPages}`}</span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="border px-3 py-1 mx-1 rounded bg-blue-900 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
