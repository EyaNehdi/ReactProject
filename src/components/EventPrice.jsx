import { useEffect } from "react";
import { useParams } from "react-router-dom"

function EventPrice() {
    const {price}=useParams();
    useEffect(()=>{
        
    },[])
  return (
    <>
      <h2 className="text-danger text-center">
        Le prix est : {price}
      </h2>
    </>
  )
}

export default EventPrice
