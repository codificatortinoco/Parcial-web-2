import { Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import { EspaciosDashboard } from "./Pages/EspaciosDashboard";
//falta las dos pantallas

function App() {
	return <>
<AppContextProvider>
		<Routes>
		<Route path="/" element={<EspaciosDashboard/>}></Route>
				<Route path="/Reservas" element={<Reservas/>}></Route>
	</Routes>
</AppContextProvider>
	</>;
}

export default App;
