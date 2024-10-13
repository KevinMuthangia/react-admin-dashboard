
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


export const dataLinks = [
    {
        text: "Manage Team",
        path: "team",
        icon: HiOutlineUsers,
    },
    {
        text: "Contact Information",
        path: "contact",
        icon: MdOutlineContacts 
    },
    {
        text: "Invoices Balances",
        path: "invoices",
        icon: ImFileText2 
    },
];


export const pageLinks = [
    {
        text: "Profile Form",
        path: "create-user",
        icon: FaRegUser 
    },
    {
        text: "Calender",
        path: "calender",
        icon: FaRegCalendarAlt 
    },
    {
        text: "FAQ Page",
        path: "faqs",
        icon: FaRegQuestionCircle 
    },
]

export const chartLinks = [
    {
        text: "Bar Chart",
        path: "bar",
        icon: FaChartBar  
    },
    {
        text: "Pie Chart",
        path: "pie",
        icon: FiPieChart 
    },
    {
        text: "Line Chart",
        path: "line",
        icon: FaChartLine 
    },
]