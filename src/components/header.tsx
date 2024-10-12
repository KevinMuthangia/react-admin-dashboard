import { HeaderProps } from "../lib/types";

const Header = ({ title, subtitle }: HeaderProps) => {
	return (
		<div className='py-4'>
			<h2 className="uppercase font-bold">{title}</h2>
			<h5 className='text-secondary font-medium capitalize'>{subtitle}</h5>
		</div>
	);
};

export default Header;