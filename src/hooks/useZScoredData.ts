import { useEffect, useState } from 'react';
import { TChartData, TChartDataZScored } from '../types/chart';
import { MathCounter } from '../utils/math-counter';

const TARGET_Z_SCORE = 1;

export const useZScoredData = (data: TChartData[]): TChartDataZScored[] => {
    const [zScoredData, setZScoredData] = useState<TChartDataZScored[]>([]);

    const getMaths = (data: number[]) => {
        const avg = MathCounter.getAvg(data);
        const dispersion = MathCounter.getDispersion(data, avg);

        return {
            avg,
            dispersion,
        };
    };

    const getDataMaths = () => {
        const values: number[] = [];

        data.forEach(dataPart => {
            values.push(dataPart.y);
        });

        const uvMaths = getMaths(values);

        return {
            maths: { ...uvMaths, data: values },
        };
    };

    useEffect(() => {
        const zScoredData: TChartDataZScored[] = [];
        const { maths } = getDataMaths();

        data.forEach(dataPart => {
            const valueZScore = MathCounter.getZScore(
                dataPart.y,
                maths.data,
                maths.avg,
                maths.dispersion,
            );

            zScoredData.push({
                x: dataPart.x,
                y: dataPart.y,
                aboveZScore: valueZScore > TARGET_Z_SCORE ? dataPart.y : undefined,
            });
        });

        setZScoredData(zScoredData);
    }, [data]);

    return zScoredData;
};
