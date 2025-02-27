import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { CHART_DATA } from '../data/chart';
import { useZScoredData } from '../hooks/useZScoredData';

export const Chart = () => {
    const zScoredData = useZScoredData(CHART_DATA);
    console.log(zScoredData);

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <LineChart
                width={500}
                height={300}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                data={zScoredData}
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='x' />
                <YAxis />
                <Legend />
                <Line connectNulls={false} type='linear' dataKey='y' stroke='green' fill='green' />
                <Line
                    connectNulls={false}
                    type='linear'
                    dataKey='aboveZScore'
                    stroke='red'
                    fill='red'
                />
            </LineChart>
        </ResponsiveContainer>
    );
};
