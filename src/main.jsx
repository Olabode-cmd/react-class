import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import Index from './pages/index'
import About from "./pages/about";
import FetchDataExample from "./pages/fetch";
import Form from './pages/form'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/test-index" element={<Index />} />
			<Route path="/about" element={<About />} />
			<Route path="/fetch" element={<FetchDataExample />} />
			<Route path="/form" element={<Form />} />
			{/* <Route path="/test-index" element={<Index />}>
				<Route index element={<RecentActivity />} />
				<Route path="project/:id" element={<Project />} />
			</Route> */}
		</Routes>
	</BrowserRouter>
);
