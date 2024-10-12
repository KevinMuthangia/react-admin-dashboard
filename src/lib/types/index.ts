export type Event = {
    id: string;
    title: string;
    start: string;      // or Date, depending on your handling
    end?: string;      // or Date, optional
    allDay?: boolean;   // optional
};


export interface SidebarItemProps {
	icon: JSX.Element;
	text: string;
	href: string;
}

export interface HeaderProps {
	title: string;
	subtitle: string;
}

export interface IconButtonProps {
	icon: JSX.Element;
	onClick?: () => void;
    title?: string  
}

export interface StatBoxProps {
    title: string;
    subtitle: string;
    icon: JSX.Element;
    progress: number;
    increase: string;
};

export interface FaqItemProps {
    question: string; 
    answer: string 
}

export interface GraphProps {
    height: number;
    legendPosition?: "top" | "bottom" | "left" | "right"; 
}

export interface BarGraphProps extends GraphProps {
    showTitle?: boolean;
}

export interface LineGraphProps extends BarGraphProps {
    lineType: "smooth" | "linear";
}

 