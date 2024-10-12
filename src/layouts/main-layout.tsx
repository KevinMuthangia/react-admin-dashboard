import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Sidebar from "../components/global/sidebar";
import Topbar from "../components/global/topbar";

const ScrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}


const MainLayout = ({ children } : {children: JSX.Element}) => {
	const mode = useSelector((state: RootState) => state.theme.mode );

	const toggleColorMode = () => {
		if (mode === "light") {
			document.body.classList.remove("dark");
		} else {
			document.body.classList.add("dark");
		}

	}

	useEffect(() => {
		toggleColorMode();
	}, [mode])

	return (
		<main className="flex relative">
			<ScrollToTop />{/* Scroll to top on route change */}
			<Sidebar />
			<div className="flex-1 pt-3 px-[3%]">
				<Topbar />
				{children}
			</div>
		</main>
	);
};

export default MainLayout;