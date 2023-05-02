import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
}

function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setTitle(data.name);
        setDescription(data.description);
        setPrice(data.price);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseFloat(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedProduct = { ...product, name: title, description, price };
    fetch(`https://dummyjson.com/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    })
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setTitle(data.title);
        setDescription(data.description);
        setPrice(data.price);
      })
      .catch((error) => console.log(error));
  };

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div className='flex flex-col lg:flex-row p-8 lg:p-16 space-x-24'>
      <div className='flex-1'>
        <h1 className='font-bold text-2xl'>{product.title}</h1>
        <p className='mb-5 mt-px'>Add and Edit item details</p>
        <img src={product.thumbnail} alt={product.title} className='w-full' />
      </div>
      <form onSubmit={handleSubmit} className='space-y-8 w-full flex-1'>
        <label className='flex flex-col px-8 py-3 border rounded-md border-gray-4  focus:bg-mainPurple'>
          Title:
          <input type='text' value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label className='flex flex-col px-8 py-3 border rounded-md border-gray-4 h-64'>
          Description the item
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>
        <br />
        <label className='flex flex-col px-8 py-3 border rounded-md border-gray-4 '>
          Price:
          <div>
            $ <input type='number' step='0.01' value={price} onChange={handlePriceChange} />
          </div>
        </label>
        <br />
        <button
          type='submit'
          className='bg-mainPurple text-white text-center text-2xl w-full py-4 rounded-md'>
          Save
        </button>
      </form>
    </div>
  );
}

export default ProductDetails;
