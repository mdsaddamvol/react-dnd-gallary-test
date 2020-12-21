import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Gallary from "./components/gallary/gallary";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
	return (
		<div className='container'>
			<DndProvider backend={HTML5Backend}>
				<div className='sidebar-container'>
					<Sidebar />
				</div>
				<div className='gallary-container'>
					<Gallary />
				</div>
			</DndProvider>
		</div>
	);
}

export default App;
