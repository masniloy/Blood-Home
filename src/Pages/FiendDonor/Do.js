import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Do = ({ request }) => {
    console.log(request);
    const { name, blood, district, status, phone, email } = request;
    console.log(name);
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Do;