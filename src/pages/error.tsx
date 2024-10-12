import { Link  } from "react-router-dom";
import { FaSadCry } from "react-icons/fa";

const Error = () => {
	document.title = "KevMuthangia | 404";

	return (
		<div className="pt-6 pb-12 h-[calc(100vh-64px)] flex flex-col justify-center items-center">
			<div className="text-center">
				<h1 className="text-7xl font-black">404</h1>
				<h4 className="uppercase">page not found</h4>
			</div>

			{/* EMOJI */}
			<div className="mb-12 w-fit h-fit bg-primaryDark dark:bg-tertiaryDark rounded-full">
				<FaSadCry className="text-[200px] text-yellow-400" />
			</div>

			{/* LINK */}
			<Link to="/" 
			className="text-tertiary bg-primaryDark dark:bg-tertiaryDark hover:text-secondary px-8 py-4 text-lg duration-300"
			>
				Back to home
			</Link>
		</div>
	);
};

export default Error;