import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import Index from './pages/index.jsx'
import About from "./pages/about.jsx";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/test-index" element={<Index />} />
			<Route path="/about" element={<About />} />
			{/* <Route path="/test-index" element={<Index />}>
				<Route index element={<RecentActivity />} />
				<Route path="project/:id" element={<Project />} />
			</Route> */}
		</Routes>
	</BrowserRouter>
);
