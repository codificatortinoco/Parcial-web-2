import { useContext } from "react";
import { SpaceContext } from "../context/AppContext";

export const spaceCard= ({space}: any)=>{
    const {handleSpaceFeature, handleChangeStatus}= useContext(SpaceContext)
    return(
        <div>
            <p >{space.id}</p>
            <p >{space.name}</p>
            <p >{space.type}</p>
            <p >{space.capacity}</p>
            <p >{space.location}</p>
            <p >{space.pricePerHour}</p>
            <p >{space.available}</p>
        </div>
    )
}