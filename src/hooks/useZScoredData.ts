import { useEffect, useState } from 'react';
import { CHART_DATA } from '../data/chart';
import { TChartData, TChartDataZScored } from '../types/chart';
import { MathCounter } from '../utils/math-counter';

const TARGET_Z_SCORE = 1;

export const useZScoredData = (data: TChartData[] = CHART_DATA) => {
    const [zScoredData, setZScoredData] = useState<TChartDataZScored[]>([]);
    const [avg, setAvg] = useState(0);
    const [standartDeviation, setStandartDeviation] = useState(0);

    const getMaths = (data: number[]) => {
        const avg = MathCounter.getAvg(data);
        const standartDeviation = MathCounter.getStandartDeviation(data, avg);

        return {
            avg,
            standartDeviation,
        };
    };

    const getDataMaths = () => {
        const values: number[] = [];

        data.forEach(dataPart => {
            values.push(dataPart.y);
        });

        const maths = getMaths(values);

        return {
            maths: { ...maths, data: values },
        };
    };

    useEffect(() => {
        const zScoredData: TChartDataZScored[] = [];
        const { maths } = getDataMaths();

        setAvg(maths.avg);
        setStandartDeviation(maths.standartDeviation);

        data.forEach(dataPart => {
            const zScore = MathCounter.getZScore(
                dataPart.y,
                maths.data,
                maths.avg,
                maths.standartDeviation,
            );

            zScoredData.push({
                x: dataPart.x,
                y: dataPart.y,
                zScore,
                aboveZScore: zScore > TARGET_Z_SCORE ? dataPart.y : null,
            });
        });

        setZScoredData(zScoredData);
    }, [data]);

    return {
        zScoredData,
        maths: {
            avg,
            standartDeviation,
        },
    };
};
