import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from '../contextStore/StoreProvider';

const ProductDetails = () => {
  const { index } = useParams();
  const { products } = useStore();
  const navigate = useNavigate();

  const productIndex = Number(index);
  const selectedProduct = products[productIndex];

  return (
    <div className="p-4">
      {!index || !selectedProduct ? (
        <h1 className='text-red-600 text-4xl h-screen flex justify-center items-center'>
          Product has not been selected. Please select the product.
        </h1>
      ) : (
        <div className='border-2 border-black rounded-lg p-4 w-1/2 m-auto shadow hover:bg-blue-100 transition-transform duration-500'>
          <img
            className="w-full h-40 object-contain px-5"
            src={selectedProduct.image}
            alt={selectedProduct.title || "Product Image"}
          />
          <p><span className='text-red-600'>Product-Id:</span> {selectedProduct.id}</p>
          <p><span className='text-red-600'>Title:</span> {selectedProduct.title}</p>
          <p><span className='text-red-600'>Price:</span> ${selectedProduct.price}</p>
          <p><span className='text-red-600'>Description:</span> {selectedProduct.description}</p>
        </div>
      )}

      <br />
      <div className='flex justify-center items-center space-x-4'>
        <button
          className='bg-black px-4 py-2 text-white rounded-md hover:bg-red-600 hover:text-black'
          onClick={() => navigate(-1)}
        >
          Prev Page
        </button>
        <button
          className='bg-black px-4 py-2 text-white rounded-md hover:bg-red-600 hover:text-black'
          onClick={() => navigate('/products')}
        >
          Product List
        </button>
        <button
          className='bg-black px-4 py-2 text-white rounded-md hover:bg-red-600 hover:text-black'
          onClick={() => navigate('/')}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
