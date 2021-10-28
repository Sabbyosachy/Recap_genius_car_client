import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('https://radiant-woodland-32587.herokuapp.com/allservices',data)
    .then(res=>{
        if(res.data.insertedId){
            alert('Added Succefully')
            reset();
        }
    })
    
  }
    return (
        <div className="added_form">
            <h3>Add New Services</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" type="text" {...register("name")} />
      <input placeholder="Description" type="text" {...register("description")} />
      <input placeholder="Price" type="number" {...register("price")} />
      <input placeholder="Image"{...register("img")} />

      <input className="btn" type="submit" />
    </form>
            
        </div>
    );
};

export default AddService;