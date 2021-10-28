import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css';

const Booking = () => {
    const { serviceId } = useParams();
    const[service,setService]=useState({});
    useEffect(()=>{
        fetch(`https://radiant-woodland-32587.herokuapp.com/allservices/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div className="singleService">
            <img src={service.img} alt="" srcset="" />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <h6>Price: {service.price}</h6>
        </div>
    );
};

export default Booking;