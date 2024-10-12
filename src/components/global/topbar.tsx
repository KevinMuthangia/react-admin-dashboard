import { useDispatch, useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { IoSunnyOutline, IoMoonOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineUser, HiOutlineBell } from "react-icons/hi2";
import { RootState } from "../../redux/store";
import { toggleMode } from "../../redux/theme-slice";
import IconButton from "../icon-button";

const Topbar = () => {
	const mode = useSelector((state: RootState) => state.theme.mode);
	const dispatch = useDispatch();

	const toggleColorMode = () => {
		dispatch(toggleMode());
	};

	return (
		<div className="flex justify-between items-center space-x-6 py-2">
			{/* Search */}
			<div className="bg-tertiary dark:bg-tertiaryDark flex justify-between items-center space-x-6 rounded">
				<input 
					type="text"
					placeholder="Search"
					className="bg-transparent text-base dark:text-white outline-none py-1 px-2"
				/>
				<IconButton icon={<BsSearch />} />
			</div>

			{/* Buttons */}
			<div className="flex justify-end items-center space-x-1 text-[#555] dark:text-white">
				<IconButton 
					onClick={toggleColorMode} 
					title={mode === "light" ? "Dark Mode" : "Light Mode"}
					icon={mode === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
				/>
				<IconButton title="Notifications" icon={<HiOutlineBell />} />
				<IconButton title="Settings" icon={<IoSettingsOutline />} />
				<IconButton title="Profile" icon={<HiOutlineUser />} />
			</div>
		</div>
	);
};

export default Topbar;