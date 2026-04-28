import { useContext, useEffect, useState } from "react";
import { SpaceContext } from "../context/AppContext";
import { spaceCard } from "../components/SpaceCard";
import { useNavigate } from "react-router-dom";

export const EspaciosDashboard = () => {
    const {spaceList, statusFilter, setStatusFilter}= useContext(SpaceContext)
    const navigate= useNavigate()
    const[filteredList, setFilteredList]= useState (spaceList)
    useEffect (()=> {
        if (statusFilter==="all")
            {setFilteredList (spaceList)} 
        else if (spaceFilter===true)
            {setFilteredList(spaceList.filter((space)=>spaceStatus===true))}
        
    }, [statusFilter, spaceList])
}