import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Form , Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {z} from 'zod';
import { addEvent } from "../services/api";

const eventSchema = z.object({
    name: z.string().min(3,"Event name must be at least 3 characters long"),
    description: z.string().min(10,"Event description must be at least 10 characters long"),
    price: z.number().int().positive(),
    nbTickets: z.number().int().positive(),
    nbParticipants: z.number().int().positive(),
    img: z.any().refine((file)=>file.length>0 , "Image is required")
    .refine((file)=>file[0]?.size <= 5*1024 * 1024 , "Image must be less than 5MB")
    .refine((file)=>file[0]?.type === 'image/jpeg',"Image must be of type jpg")
});

function EventForm() {
    const navigate = useNavigate();
    const [event, setEvent] = useState({
        name: '',
        description: '',
        price: 0,
        nbTickets: 0,
        nbParticipants: 0,
        img: "",
        like : false
    });

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(eventSchema),
        defaultValues: event
});
const onSubmit = async (data) =>{
const {name,description,price,nbTickets,nbParticipants,img} = data;
const eventResult = null;
console.log(data)
try{
await addEvent({name,description,price,nbTickets,nbParticipants,img:img[0].name});
console.log(eventResult);
}
catch(error){
console.error(error);
}
if (eventResult.status === 201) {
    navigate("/events");
};
}
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="name" className="mb-3">
            <Form.Label>Event Name</Form.Label>
            <Form.Control  placeholder="Enter event name"  type="text"
            name="name" {...register("name")} error={errors.name} />
            
        </Form.Group>
        <Form.Group controlId="description" className="mb-3">
            <Form.Label>Event Description</Form.Label>
            <Form.Control placeholder="Enter event description" type="text"
            name="description" {...register("description")} 
            // error={errors.description} 
            />
            {
                errors.description && (
                    <Alert variant="danger">{errors.description.message}</Alert>
                )
            }
            
        </Form.Group>
        <Form.Group controlId="price" className="mb-3">
            <Form.Label>Event Price</Form.Label>
            <Form.Control  placeholder="Enter event price"  type="number"
            name="price" {...register("price",{valueAsNumber : true})}  />
             {
                errors.price && (
                    <Alert variant="danger">{errors.price.message}</Alert>
                )
            }
           
        </Form.Group>
        <Form.Group controlId="nbTickets" className="mb-3">
            <Form.Label>Event nbTickets</Form.Label>
            <Form.Control  placeholder="Enter event nbTickets"  type="number"
            name="nbTickets" {...register("nbTickets",{valueAsNumber : true})} error={errors.nbTickets} />
            
        </Form.Group>
        <Form.Group controlId="nbParticipants" className="mb-3">
            <Form.Label>Event nbParticipants</Form.Label>
            <Form.Control  placeholder="Enter event nbParticipants" type="number"
            name="nbParticipants" {...register("nbParticipants",{valueAsNumber : true})} error={errors.nbParticipants} />
           
        </Form.Group>
        <Form.Group controlId="img" className="mb-3">
            <Form.Label>Event Image</Form.Label>
            <Form.Control  placeholder="Enter event Image" type="file"
            name="img" {...register("img")} error={errors.img} />
             {
                errors.img && (
                    <Alert variant="danger">{errors.img.message}</Alert>
                )
            }
          
        </Form.Group>
        <button type="submit" >Add</button>
        <button type="reset" onClick={()=>{navigate("/events")}}>Cancel</button>
    </Form>
  )
}

export default EventForm
