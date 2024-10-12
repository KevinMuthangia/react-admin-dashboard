import { useSelector } from 'react-redux';
import { AgCharts } from 'ag-charts-react';
import { AgChartOptions, AgCartesianSeriesOptions } from 'ag-charts-community';
import { RootState } from '../../redux/store';
import { LineGraphProps } from '../../lib/types';
import { mockLineData } from '../../lib/mockData/line';


const LineChartComponent = ({ height, legendPosition, lineType, showTitle }: LineGraphProps) => {
	const mode = useSelector((state: RootState) => state.theme.mode);

	const axisColors = mode === "dark" ? "#fff" : "#222"

	const series: AgCartesianSeriesOptions[] = mockLineData.map(item => ({
		type: 'line',
		xKey: 'transport',
		yKey: 'count',
		yName: item.id,
		legendItemName: item.id,
		data: item.data,
		stroke: item.color,
		marker: { 
			shape: "square", 
			fill: item.color,
			stroke: item.color, 
		},
        interpolation: {
            type: lineType,
        },
	}));

	const options: AgChartOptions = {
		series,
		axes: [
		  { 
			type: 'category', 
			position: 'bottom', 
			title: showTitle ? { text: 'Transport', color: axisColors } : undefined, 
			label: { color: axisColors} 
		},
		  { 
			type: 'number', 
			position: 'left', 
			title: showTitle ? { text: 'Count', color: axisColors } : undefined, 
			label: { color: axisColors} 
		}],
		legend: {
			position: legendPosition || 'right',
			orientation: legendPosition === "bottom" ? 'horizontal' : 'vertical',
			item: {
				showSeriesStroke: false,
				label: { fontSize: 14, color: axisColors },
			},
		},
		background: { fill: "transparent" },
        minHeight: height,
	  };

	return (
        <AgCharts
            options={options}
		
		/>
		);
	};

export default LineChartComponent;