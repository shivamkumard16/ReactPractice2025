import React, { createContext, useContext, useEffect, useState } from 'react';

const store = createContext();

const StoreProvider = ({ children }) => {
    const pName = "products";

    const stored = localStorage.getItem(pName);
    let initialProduct = [];

    try {
        const parsed = JSON.parse(stored);
        initialProduct = Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        initialProduct = [];
    }

    const [products, setProducts] = useState(initialProduct);
    const [loading, setLoading] = useState(true);

    async function fetchProduct() {
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            return data;
        } catch (error) {
            console.error("Fetch error:", error);
            return null;
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const loadProducts = async () => {
            if (products.length < 1) {
                const result = await fetchProduct();
                if (result) {
                    setProducts(result);
                    localStorage.setItem(pName, JSON.stringify(result));
                }
            } else {
                setLoading(false); 
            }
        };

        loadProducts();
    }, []);

    return (
        <store.Provider value={{ products, loading }}>
            {children}
        </store.Provider>
    );
};

export default StoreProvider;
export const useStore = () => useContext(store);
