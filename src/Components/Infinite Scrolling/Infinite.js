import React, { useEffect, useState } from "react";

const Infinite = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${page * 10}`
      );
      const data = await response.json();
      setProducts(data);
      setPage(page + 1);
    } catch (error) {
      console.error("error fetching data : ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const myThrottle = (cb, delay) => {
    let lastExecuted = 0;

    return (...args) => {
      let now = new Date().getTime();

      if (now - lastExecuted < delay) return;
      lastExecuted = now;

      return cb(...args);
    };
  };

  const handleScroll = myThrottle(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 500 >
        document.documentElement.offsetHeight &&
      !loading &&
      products.products.length < products.total
    ) {
      fetchProducts();
    }
  }, 500);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const { products: allProducts } = products;

  return (
    <>
      {allProducts?.length > 0 &&
        allProducts.map((item) => (
          <div key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      {loading && <p>Loading...</p>}
    </>
  );
};

export default Infinite;
