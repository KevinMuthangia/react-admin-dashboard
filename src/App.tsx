import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import MainLayout from "./layouts/main-layout";
import Loader from "./components/loader";
import "./App.css";


// Lazy load the components
const Dashboard = lazy(() => import("./pages/dashboard"));
const Calender = lazy(() => import("./pages/calender"));
const CreateNewProfile = lazy(() => import("./pages/create-new-profile"));
const Faq = lazy(() => import("./pages/faq"));
const Team = lazy(() => import("./pages/team"));
const Contact = lazy(() => import("./pages/contact"));
const Invoices = lazy(() => import("./pages/invoices"));
const Bar = lazy(() => import("./pages/charts/bar"));
const Pie = lazy(() => import("./pages/charts/pie"));
const Line = lazy(() => import("./pages/charts/line"));
const Error = lazy(() => import("./pages/error"));



const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<MainLayout>
				<Suspense fallback={<Loader />}>
					<Routes>
							<Route index element={<Dashboard />} />
							<Route path="team" element={<Team />} />
							<Route path="contact" element={<Contact/>} />
							<Route path="invoices" element={<Invoices/>} />
							<Route path="create-user" element={<CreateNewProfile />} />
							<Route path="calender" element={<Calender />} />
							<Route path="faqs" element={<Faq />} />
							<Route path="bar" element={<Bar />} />
							<Route path="pie" element={<Pie />} />
							<Route path="line" element={<Line />} />
							<Route path="*" element={<Error />} />
					</Routes>
				</Suspense>
				</MainLayout>
			</BrowserRouter>
		</Provider>
	)
}

export default App