import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
  rating: string;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.log(error));
  }, []);

    const handleViewDetails = (id: number) => {
      navigate(`/products/${id}`);
    };

  return (
    <div className='p-4 lg:p-16 md:p-8'>
      <h1 className='my-6'>TOP ITEMS</h1>
      {products.length > 0 ? (
        <div className='product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {products.map((product) => (
            <div key={product.id} className='product-card'>
              <div className='h-40 w-full'>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className='h-full w-full object-fit'
                />
              </div>

              <div className='flex justify-between my-6 space-x-6'>
                <div className='w-4/6'>
                  {' '}
                  <h2 className='text-xl font-bold'>{product.title}</h2>
                  <p>{product.rating}</p>
                  <p>{product.description}</p>
                </div>
                <div className='w-2/6 flex flex-col justify-between text-end'>
                  <p className='text-xl font-bold'>
                    ${product.price}
                    <span className='text-sm'>.00</span>
                  </p>
                  <button onClick={() => handleViewDetails(product.id)}>View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default ProductList;
