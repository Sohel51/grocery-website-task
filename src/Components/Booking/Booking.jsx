import React, { useState } from 'react'
import CalendarSection from './Calender';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        preferredDate: '',
        preferredTime: '',
        additionalInfo: '',
    });
    const [service, setService] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-4">
                    <h2 className="text-2xl font-semibold mb-4">Select Date & Time</h2>
                    <CalendarSection></CalendarSection>
                </div>
                <div className="md:w-1/2 p-4">
                    <h2 className="text-2xl font-semibold mb-4">Booking Details</h2>
                    <h2 className="text-3xl font-semibold mb-6">Book a Service</h2>
                    <form onSubmit={handleSubmit} className="space-y-6" method="POST" netlify-honeypot="bot-field" data-netlify="true" name="booking">
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="booking" />
                        <div className="space-y-2">
                            <label className="text-gray-600 font-medium">Select a Service</label>
                            <select name="service" value={service} onChange={(e) => setService(e.target.value)} className="border-2 border-gray-200 p-2 w-full rounded-lg" required>
                                <option value="">-- Select a Service --</option>
                                <option value="Service A">Service A</option>
                                <option value="Service B">Service B</option>
                                <option value="Service C">Service C</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-gray-600 font-medium">Name</label>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="border-2 border-gray-200 p-2 w-full rounded-lg" required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-gray-600 font-medium">Email</label>
                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 border-gray-200 p-2 w-full rounded-lg" required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-gray-600 font-medium">Phone Number</label>
                            <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="border-2 border-gray-200 p-2 w-full rounded-lg" required />
                        </div>
                        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">Book Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Booking