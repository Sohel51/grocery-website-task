import { useEffect, useState } from "react";

export default function NewProduct() {
    const [services, setServices] = useState([]);
    const [selectedOption, setSelectedOption] = useState("men's clothing");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setServices(data))
            .catch((error) => console.error(error));
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <h2>Services</h2>
            <label htmlFor="category">Select a category:</label>

            <select onChange={handleCategoryChange} name="" id="">
                <option value="men's clothing">men's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
                <option value="women's clothing">women's clothing</option>
            </select>

            <div className="flex flex-wrap">
                {services.filter((value) => {
                    return value.category === selectedOption;
                }).map((service) => (
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={service.id}>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover"
                            />
                            <div>
                                <div className="p-4 h-48">
                                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                                    <p className="text-gray-600">{service.category}</p>
                                </div>
                                <div className="flex items-center p-4">
                                    <span className="font-semibold text-xl">${service.price}</span>
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
    );
}
