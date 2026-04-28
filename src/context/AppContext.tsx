/* eslint-disable react-refresh/only-export-components */
import {
	createContext,
	useState,
} from 'react';
import { initialSpacesData } from '../data/initialSpacesData';
import { AppContext, AppContextProvider } from './AppContext copy';

export const SpaceContext= createContext (null)
export interface available {value: boolean} 

export const AppContextProvider= ({children}) => {
	const [spacesList, setSpacesList]= useState (initialSpacesData)
	const [spaceFeature, setSpaceFeature]= useState ([])
	const [availableFilter, setAvailableFilter]= useState("all")

	const handleChangeAvailable= (id:number, newAvailable: boolean)=>{
		const newList= spacesList.map((space)=> {
			if(space.id===id) {
				return {...space, state: newAvailable}
			} 
			
			return space;
		})
		setSpacesList(newList)
	}
	const handleSpaceFeature= (space: any) =>{
		const isSpaceFeatured= spaceFeature.includes (space)
		let newList
		if(isSpaceFeatured){
			newList= spaceFeature.filter((item:any)=>item.id!==space.id)
		}
		else {newList=[...spaceFeature,space]}
		setSpaceFeature(newList)
		console.log (newList)
	}
	return (
		<AppContext.Provider value={{spacesList,setSpacesList, handleChangeAvailable,handleSpaceFeature,spaceFeature, setSpaceFeature, availableFilter, setAvailableFilter}}>
			{children}
		</AppContext.Provider>
	)
}