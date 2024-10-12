import { useSelector } from 'react-redux';
import { AgCharts } from 'ag-charts-react';
import { AgChartOptions, AgCartesianSeriesOptions } from 'ag-charts-community';
import { RootState } from '../../redux/store';
import { BarGraphProps } from '../../lib/types';
import { mockBarData } from '../../lib/mockData/bar';


interface FoodData {
    country: string;
    type: string;
    value: number;
    color: string;
}

interface ChartDataEntry {
    country: string;
    [key: string]: number | string; 
}


const BarComponent = ({ height, legendPosition, showTitle }: BarGraphProps) => {
    const mode = useSelector((state: RootState) => state.theme.mode);

    const axisColors = mode === "dark" ? "#fff" : "#222";

    // Group data by type to create series
    const series: AgCartesianSeriesOptions[] = [...new Set(mockBarData.map(data => data.type))].map(type => ({
        type: 'bar',
        xKey: 'country',
        yKey: type,
        yName: type,
        fill: mockBarData.find(data => data.type === type)?.color || '#ee6648', // Get the first color for this type
    }));

    
    const chartData: ChartDataEntry[] = mockBarData.reduce((acc: ChartDataEntry[], curr: FoodData) => {
        const existing = acc.find(item => item.country === curr.country);
        if (existing) {
            existing[curr.type] = curr.value; // Assign value by type
        } else {
            acc.push({ country: curr.country, [curr.type]: curr.value }); // Create new entry
        }
        return acc;
    }, []);
    

    const options: AgChartOptions = {
        data: chartData,
        series,
        axes: [
            { 
                type: 'category', 
                position: 'bottom', 
                title: showTitle ? { text: 'Country', color: axisColors } : undefined, 
                label: { color: axisColors } 
            },
            { 
                type: 'number', 
                position: 'left', 
                title: showTitle ? { text: 'Quantity', color: axisColors } : undefined, 
                label: { color: axisColors } 
            },
        ],
        legend: {
            position: legendPosition || 'right',
            item: {
                label: {
                    fontSize: 14,
                    color: axisColors,
                },
            },
        },
        minHeight: height,
        background: { fill: "transparent" },
    };

    return (
        <AgCharts  options={options} />
    );
};

export default BarComponent;
