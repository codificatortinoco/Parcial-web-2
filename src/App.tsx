import { Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
//falta las dos pantallas

function App() {
	return <>
<AppContextProvider>
		<Routes>
		<Route path="/" element={<Espacios/>}></Route>
				<Route path="/Reservas" element={<Reservas/>}></Route>
	</Routes>
</AppContextProvider>
	</>;
}

export default App;
