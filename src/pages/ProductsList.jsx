import React, { useEffect } from 'react'
import { useStore } from '../contextStore/StoreProvider'
import { useNavigate } from 'react-router-dom';

export const ProductsList = () => {
    const { products, loading } = useStore();
    const navigate = useNavigate();
    useEffect(() => {
        console.log("products = ", products);
    }, [products]);

    if (loading) {
        return <h1 className='h-screen flex justify-center items-center text-6xl animate-pulse text-red-700'>Loading...</h1>;
    }

    if (products.length === 0) {
        return <h2 className="text-center text-2xl text-gray-500">No products found.</h2>;
    }

    return (
        <div className="cursor-pointer  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4" >
            {products.map((item, index) => (
                <div key={item.id} className="border p-4 rounded shadow hover:bg-blue-100 transition-transform duration-500 " onClick={() => navigate(`/product-details/${index}`)}>
                    <img src={item.image} alt={item.title} className="w-full h-40 object-contain px-5" />
                    <p className="font-semibold mt-2">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.category}</p>
                </div>
            ))}
        </div>
    );
};
