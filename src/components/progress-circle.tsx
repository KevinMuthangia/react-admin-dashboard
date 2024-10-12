import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


const ProgressCircle = ({ progress = 0.75, size = 40 }) => {
	const mode = useSelector((state: RootState) => state.theme.mode);
	const angle = progress * 360;

	const colors = {
		primary:  mode === "dark" ? "#1F2A40" : "#f2f0f0", 
		blueAccent: "#6870fa",
		greenAccent: "#4cceac"
	};

	return (
		<div
			style={{
				background: `radial-gradient(${colors.primary} 55%, transparent 56%),
				conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent} ${angle}deg 360deg),
				${colors.greenAccent}`,
				width: `${size}px`,
				height: `${size}px`,
			}}
			className="rounded-full"
		/>
  );
};

export default ProgressCircle;
