import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleSidebarOpen } from "../../redux/theme-slice";
import SidebarItem from "./sidebar-item";
import IconButton from "../icon-button";
import adminImg from "../../assets/img.jpg";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineContacts } from "react-icons/md";
import { ImFileText2 } from "react-icons/im";
import { FiPieChart } from "react-icons/fi";
import { 
    FaRegUser, 
    FaRegCalendarAlt, 
    FaRegQuestionCircle, 
    FaChartBar, 
    FaChartLine, 
} from "react-icons/fa";



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
                <div className="mx-auto w-[45%] aspect-square rounded-full bg-[#fcfcfc] dark:bg-primaryDark overflow-hidden">
                    <img src={adminImg} alt="admin" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold">Kevin M.</h3>
                <h5 className="text-secondary">Admin</h5>
            </div>

            {/* LINKS */}
            <nav>
                <SidebarItem href="/" icon={<IoHomeOutline />} text="Dashboard" />
                <h6 className={`${isSidebarOpen ? "pl-[5%]" : ""} text-[#999] uppercase pl-[5%] my-2`}>Data</h6>
                {
                    dataLinks.map((link, index) => (
                        <SidebarItem key={index} href={link.path} icon={link.icon} text={link.text} />
                    ))
                }
                <h6 className={`${isSidebarOpen ? "pl-[5%]" : ""} text-[#999] uppercase pl-[5%] my-2`}>Pages</h6>
                {
                    pageLinks.map((link, index) => (
                        <SidebarItem key={index} href={link.path} icon={link.icon} text={link.text} />
                    ))
                }
                <h6 className={`${isSidebarOpen ? "pl-[5%]" : ""} text-[#999] uppercase pl-[5%] my-2`}>Charts</h6>
                {
                    chartLinks.map((link, index) => (
                        <SidebarItem key={index} href={link.path} icon={link.icon} text={link.text} />
                    ))
                }
            </nav>
        </div>
    );
};

export default Sidebar; 

const dataLinks = [
    {
        text: "Manage Team",
        path: "team",
        icon: <HiOutlineUsers />
    },
    {
        text: "Contact Information",
        path: "contact",
        icon: <MdOutlineContacts />
    },
    {
        text: "Invoices Balances",
        path: "invoices",
        icon: <ImFileText2 />
    },
];


const pageLinks = [
    {
        text: "Profile Form",
        path: "create-user",
        icon: <FaRegUser />
    },
    {
        text: "Calender",
        path: "calender",
        icon: <FaRegCalendarAlt />
    },
    {
        text: "FAQ Page",
        path: "faqs",
        icon: <FaRegQuestionCircle />
    },
]

const chartLinks = [
    {
        text: "Bar Chart",
        path: "bar",
        icon: <FaChartBar  />
    },
    {
        text: "Pie Chart",
        path: "pie",
        icon: <FiPieChart />
    },
    {
        text: "Line Chart",
        path: "line",
        icon: <FaChartLine />
    },
]