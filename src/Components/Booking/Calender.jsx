import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarSection = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    };

    return (
        <div>
            <div className="bg-gray-100 p-10">
                <div className="container mx-auto">
                    <Calendar className="w-96"
                        onChange={onChange}
                        value={date}
                    />
                    <p className="text-gray-600 mt-4">Available times on {date.toLocaleDateString()}:</p>
                    <ul className="list-disc pl-8">
                        <li>10:00am - 11:00am</li>
                        <li>1:00pm - 2:00pm</li>
                        <li>3:00pm - 4:00pm</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CalendarSection;
