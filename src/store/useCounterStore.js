import {create} from 'zustand';
import {persist} from 'zustand/middleware';

export const useCounterStore = create(
    persist(
    (set)=>({
    count: 0, //intial state
    increment: ()=>set(
        (state)=>({count: state.count + 1})
    ),
    decrement: ()=>set(
        (state)=>({count: state.count - 1})
    ),
    reset: ()=>set(
        {count: 0}
    )
}),{
    name: 'counter-v1',
    getStorage: () => localStorage,
}));
