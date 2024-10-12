import Header from "../../components/header";
import LineChartComponent from '../../components/charts/line';

const Line = () => {
	document.title = "KevMuthangia | Line Graph";

	return (
		<div>
			<Header title="Line Chart" subtitle="Simple Line Chart" />
			<div className="pt-6 pb-12">
				<h4 className='mb-6 text-center font-medium'>Comparative Analysis of Transportation Methods by Country</h4>
				<LineChartComponent height={400} lineType="smooth" showTitle={true} />
			</div>
		</div>
	);
};

export default Line;