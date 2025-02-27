import React, { useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';
import { useChartGradient } from '../hooks/useChartGradient';
import { useZScoredData } from '../hooks/useZScoredData';
import { TChartDataZScored } from '../types/chart';
import { CustomTooltip } from './tooltip';

export const Chart = () => {
    const { zScoredData, maths } = useZScoredData();
    const { gradientPercents } = useChartGradient(zScoredData);
    const [options] = useState({
        gradientId: 'aboveZScore',
        dotRadius: 5,
        colors: {
            base: 'green',
            target: 'red',
        },
    });

    return (
        <div className='chart-wrapper'>
            <div className='chart-meta'>
                <span>Среднее: {maths.avg}</span>
                <span>Стандартное распределение: {maths.standartDeviation}</span>
            </div>
            <ResponsiveContainer className='chart'>
                <LineChart data={zScoredData}>
                    <defs>
                        <linearGradient id={options.gradientId} x1='0%' y1='0' x2='100%' y2='0'>
                            {gradientPercents.map(percent => {
                                return (
                                    <React.Fragment key={percent.value}>
                                        <stop
                                            offset={`${percent.value}%`}
                                            stopColor={
                                                percent.isAboveZScore
                                                    ? options.colors.target
                                                    : options.colors.base
                                            }
                                        />
                                        <stop
                                            offset={`${percent.value}%`}
                                            stopColor={
                                                percent.isAboveZScore
                                                    ? options.colors.base
                                                    : options.colors.target
                                            }
                                        />
                                    </React.Fragment>
                                );
                            })}
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='x' />
                    <Tooltip
                        content={props => {
                            const typedPayload = props.payload as unknown as {
                                payload: TChartDataZScored;
                            }[];
                            return <CustomTooltip payload={typedPayload} />;
                        }}
                    />
                    <YAxis />
                    <Line
                        type='linear'
                        dataKey='y'
                        stroke={`url(#${options.gradientId})`}
                        fill={options.colors.base}
                        r={options.dotRadius}
                        activeDot={{ fill: options.colors.base, r: options.dotRadius }}
                    />
                    <Line
                        type='linear'
                        dataKey='aboveZScore'
                        stroke={options.colors.target}
                        fill={options.colors.target}
                        r={options.dotRadius}
                        activeDot={{ fill: options.colors.target, r: options.dotRadius }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
