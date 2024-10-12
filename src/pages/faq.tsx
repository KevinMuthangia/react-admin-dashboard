import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaqItemProps } from "../lib/types";
import { faqsData } from "../lib/mockData/faq";
import Header from "../components/header";
import  IconButton from "../components/icon-button";



const FaqItem = ({ question, answer }: FaqItemProps ) => {
	document.title = "KevMuthangia | FAQs";

	const [isOpen, setIsOpen] = useState(false);

	function toggleOpen() {
		setIsOpen(!isOpen);
	}

	return (
		<div className="rounded overflow-hidden shadow-md">
			<div 
				onClick={toggleOpen} 
				className={` flex justify-between items-center bg-tertiary dark:bg-tertiaryDark px-4 py-2 space-x-6 cursor-pointer`}
			>
				<h4 className="capitalize">{question}</h4>
				<IconButton 
					icon={isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />} 
					onClick={toggleOpen}
				/>
			</div>
			<div className={`${isOpen ? "text-lg min-h-20 px-4 pt-4 pb-2" : "h-0 text-[0px] p-0 opacity-0"} ease-in duration-300`}>
				<p className="capitalize">{answer}</p>
			</div>

		</div>
	)
}

// MAIN COMPONENT

const Faq = () => {
	return (
		<div>
			<Header title="FAQ" subtitle="Frequently Asked Questions" />
			<div className="pt-6 py-12 space-y-6">
				{
					faqsData.map((faq, index: number) => (
						<FaqItem key={index} question={faq.question} answer={faq.answer} />
					))
				}
			</div>
		</div>
	);
};

export default Faq;

