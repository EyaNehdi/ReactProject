import {create} from 'zustand';
import { addEvent, getallEvents, deleteEvent , editEvent } from '../services/api';
export const useEventStore = create(
    (set)=>({
        events:[],
        errors:"",
        fetchEvents: async ()=>{
            try{
const response = await getallEvents();
set({events:response.data});
            }catch(error){
set({errors:error.message})
            }
        }, 
        addEvent: async (event)=>{
            try{
                const response = await addEvent({name : event.name,
                    description:event.description,
                    price :event.price,
                    nbTickets : event.nbTickets,
                    nbParticipants: event.nbParticipants,
                    img: event.img?.[0]?.name});
                set((state)=>({
                    events:[...state.events, response.data]
                }));
                return response;

            }catch (error){
                set({errors:error.message});
                
            }
        },
        deleteEvent: async (id)=>{
            try{
                await deleteEvent(id);
                set((state)=>({
                    events:state.events.filter(event => event.id !== id)}));
    }
            catch(error){
                set({errors:error.message});
            }
        },
        updateEvent: async (id,event)=>{
            try {
const response = await editEvent(id, {
    name: event.name,
    description: event.description,
    price: event.price,
    nbTickets: event.nbTickets,
    nbParticipants: event.nbParticipants,
    img: event.img?.[0]?.name || event.img,
});
set((state)=>({
events:state.events.map((event)=>
event.id === id ? response.data : event
)
}));
return response;
            }
            catch(error){
                set({errors:error.message});
            }

        },
        
    })
)