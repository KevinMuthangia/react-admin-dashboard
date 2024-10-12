import { IconButtonProps } from "../lib/types";

const IconButton = ({icon, onClick, title }: IconButtonProps) => {
	return (
		<button 
			onClick={onClick}
			title={title}
			className="text-lg w-8 h-8 flex justify-center items-center rounded-full hover:bg-black/20 hover:dark:bg-black/60 duration-300"
		>
			{icon}
		</button>
	);
};

export default IconButton;