import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductSelection = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [products, setProducts] = useState([]);

    

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setProducts(res.data);
        });
    }, []);

    return (
        <div>
            <div className="max-w-6xl m-auto px-4 py-16">
                <h2 className="text-3xl font-semibold mb-6">Choose a Product</h2>
                
                <div className="flex flex-wrap">
                    {products.map((product) => (
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={product.id}>
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div>
                                    <div className="p-4 h-48">
                                        <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                                        <p className="text-gray-600">{product.category}</p>
                                    </div>
                                    <div className="flex items-center p-4">
                                        <span className="font-semibold text-xl">${product.price}</span>
                                        <button className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductSelection;
