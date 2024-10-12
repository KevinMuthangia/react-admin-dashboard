import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { SidebarItemProps } from "../../lib/types";
import IconButton from "../icon-button";



const SidebarItem = ({ icon, text, href}: SidebarItemProps) => {
	const isSidebarOpen = useSelector((state: RootState) => state.theme.isSidebarOpen)

	function handleActiveClasses({ isActive }: { isActive: boolean }) {
        return isActive 
			? "text-secondary font-bold my-3" 
			: "text-[#555] dark:text-white hover:text-secondary my-3";
    }


	return (
		<NavLink to={href} className={handleActiveClasses} title={text}>
			<div className={`${ isSidebarOpen ? "pl-[5%] justify-start " : "justify-center"} py-1 rounded w-fit flex  items-center space-x-5 duration-300`}>
				{
					isSidebarOpen ? 
					<>
						<span className="text-lg">{icon}</span> 
						<h5>{text}</h5>
					</>
					: <span className="text-base"><IconButton icon={icon} /></span>
				}
			</div>
		</NavLink>
	);
};

export default SidebarItem;