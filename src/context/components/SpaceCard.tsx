import { useContext } from "react";
import { SpaceContext } from "../context/AppContext";

export const SpaceCard= ({space}: any)=>{
    const {handleSpaceFeature, handleChangeAvailable}= useContext(SpaceContext)
    return(
        <div>
            <p >{space.id}</p>
            <p >{space.name}</p>
            <p >{space.type}</p>
            <p >{space.capacity}</p>
            <p >{space.location}</p>
            <p >{space.pricePerHour}</p>
            <p >{space.available}</p>
            <button onClick={()=>handleSpaceFeature(space)}>Filtro</button>
            <button onClick={()=>handleChangeAvailable(space.id, true)}> </button>
        </div>
    )
}