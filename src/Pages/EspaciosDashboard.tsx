import { useContext, useEffect, useState } from "react";
import { SpaceContext } from "../context/AppContext";
import { SpaceCard } from "../components/SpaceCard";
import { useNavigate } from "react-router-dom";

export const EspaciosDashboard = () => {
    const {spacesList, availableFilter, setAvailableFilter}= useContext(SpaceContext)
    const navigate= useNavigate()
    const[spacefilteredList, setFilteredList]= useState (spaceList)
    useEffect (()=> {
        if (availableFilter==="all")
            {setFilteredList (spacesList)} 
        else if (availableFilter===true)
            {setFilteredList(spacesList.filter((space)=>space.available===true))}
        
    }, [availableFilter, spacesList])
    return (
        <>
        <div>
            <button onClick={()=>navigate("/Reservas")}>reservas</button>
            <button onClick={()=>setAvailableFilter (true)}>Filtrar espacios</button>

            { spacefilteredList.map ((space)=>(<SpaceCard key={space.id} space={space}/>))}
        </div>

        </>
    )
}