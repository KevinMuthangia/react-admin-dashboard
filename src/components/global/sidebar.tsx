import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleSidebarOpen } from "../../redux/theme-slice";
import SidebarItem from "./sidebar-item";
import IconButton from "../icon-button";
import CurrentUser from "../currentUser";
import adminImg from "../../assets/img.jpg";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { dataLinks, chartLinks, pageLinks } from "../../lib/nav";



const Sidebar = () => {
    const isSidebarOpen = useSelector((state: RootState) => state.theme.isSidebarOpen);
    const dispatch = useDispatch();

    function handleToggleSidebar() {
        dispatch(toggleSidebarOpen())
    }

  

    return (
        <div className={`${isSidebarOpen ? "w-64" : "w-20"} px-4 py-4 h-screen overflow-x-hidden overflow-y-auto sticky top-0 bottom-0 bg-tertiary dark:bg-tertiaryDark duration-300`}>
            <div className="flex justify-between items-center mb-6">
                { isSidebarOpen && <h4 className="whitespace-nowrap font-bold">LOGO</h4>}
                <IconButton icon={<RxHamburgerMenu />} onClick={handleToggleSidebar} />
            </div>

            {/* IMAGE */}
            <div className={`${isSidebarOpen ? "w-full mb-4 text-center" : "max-w-0 max-h-0 overflow-hidden"}`}>
                <CurrentUser name="Kev M." role="Admin" profilePic={adminImg} />
            </div>

            {/* LINKS */}
            <nav>
                <SidebarItem href="/" icon={<IoHomeOutline />} text="Dashboard" />
                <h6 className={`${isSidebarOpen ? "pl-[5%]" : ""} text-[#999] uppercase pl-[5%] my-2`}>Data</h6>
                {
                    dataLinks.map((link, index) => (
                        <SidebarItem key={index} href={link.path} icon={<link.icon />} text={link.text} />
                    ))
                }
                <h6 className={`${isSidebarOpen ? "pl-[5%]" : ""} text-[#999] uppercase pl-[5%] my-2`}>Pages</h6>
                {
                    pageLinks.map((link, index) => (
                        <SidebarItem key={index} href={link.path} icon={<link.icon />} text={link.text} />
                    ))
                }
                <h6 className={`${isSidebarOpen ? "pl-[5%]" : ""} text-[#999] uppercase pl-[5%] my-2`}>Charts</h6>
                {
                    chartLinks.map((link, index) => (
                        <SidebarItem key={index} href={link.path} icon={<link.icon />} text={link.text} />
                    ))
                }
            </nav>
        </div>
    );
};

export default Sidebar; 
