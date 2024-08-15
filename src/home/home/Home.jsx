import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

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

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://server-bay-six.vercel.app/products", {
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
      });
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, search, brand, category, minPrice, maxPrice, sortBy, sortOrder]);

  return (
    <div className="p-4">
      <h1 className="text-center font-rubik  text-2xl font-semibold dark:text-gray-100 mt-6">
        Welcome to Our Shop...
      </h1>
      <h1 className="text-center dark:text-gray-100  text-lg font-rubik mb-12">
        Shop smarter, live better – find your essentials and beyond
      </h1>

      {/* Search and Filters */}
      <div className="mb-4 sm:text-center">
        <div>
          <span>Search here... </span>
          <input
            type="text"
            placeholder="Search by product name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" border-blue-800 border p-2 rounded mb-2 mr-2"
          />
        </div>

        <select
          onChange={(e) => setBrand(e.target.value)}
          className="border border-blue-800 p-2 rounded mb-2 mr-2"
        >
          <option value="">All Brands</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="LG">LG</option>
        </select>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 border-blue-800 rounded mb-2 mr-2"
        >
          <option value="">All Categories</option>
          <option value="mobile">Mobile</option>
          <option value="tv">TV</option>
          <option value="laptop">Laptop</option>
          <option value="tablet">Tablet</option>
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border p-2 border-blue-800 rounded mb-2 mr-2"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 border-blue-800 rounded mb-2 mr-2"
        />
        {/* sort by start */}
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-blue-800 p-2 rounded mb-2 mr-2"
        >
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="creationDate">Date</option>
        </select>

        {/* Conditionally render sort options based on selected sortBy */}
        {sortBy === "price" && (
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-blue-800 p-2 rounded mb-2"
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        )}

        {sortBy === "creationDate" && (
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-blue-800  p-2 rounded mb-2"
          >
            <option value="desc">Newest to Oldest</option>
            <option value="asc">Oldest to Newest</option>
          </select>
        )}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <Card key={product._id} product={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center items-center">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="bg-blue-800 text-white border px-3 py-1 mx-1 rounded"
        >
          Previous
        </button>
        <span className="px-3 py-1 mx-1">{`Page ${page} of ${totalPages}`}</span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="border px-3 py-1 mx-1 rounded bg-blue-800 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
