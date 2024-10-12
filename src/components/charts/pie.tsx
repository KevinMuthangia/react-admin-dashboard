import { useSelector } from "react-redux";
import { AgCharts } from "ag-charts-react";
import { AgChartOptions, AgPieSeriesOptions } from 'ag-charts-community';
import { RootState } from "../../redux/store";
import { GraphProps } from "../../lib/types";
import { mockPieData } from "../../lib/mockData/pie";

const PieComponent = ({ height, legendPosition }: GraphProps) => {
    const mode = useSelector((state: RootState) => state.theme.mode);
    const axisColors = mode === "dark" ? "#fff" : "#222";

    const series: AgPieSeriesOptions[] = [
        {
            type: 'pie',
            angleKey: 'value',
            calloutLabelKey: 'label',
            calloutLabel: {
                color: axisColors,
            },
            tooltip: {
                enabled: true,
                renderer: (params: any) => {
                    return {
                        content: `${params.datum.label}: ${params.datum.value}`,
                    };
                },
            },
            fills: mockPieData.map(item => item.color),
        },
    ];

    const options: AgChartOptions = {
        data: mockPieData,
        series, 
        legend: {
            position: legendPosition || 'bottom',
            item: {
                label: { color: axisColors },
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

export default PieComponent;
