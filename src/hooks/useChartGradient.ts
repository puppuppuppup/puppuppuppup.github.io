import { useEffect, useState } from 'react';
import { TChartDataZScored, TGradientPercent } from '../types/chart';

export const useChartGradient = (zScoredData: TChartDataZScored[]) => {
    const [gradientPercents, setGradientPercents] = useState<TGradientPercent[]>([]);

    useEffect(() => {
        const gradientPercents: TGradientPercent[] = [];
        zScoredData.forEach((_, i) => {
            if (i < zScoredData.length - 1) {
                const isNextAboveZScore =
                    !zScoredData[i].aboveZScore && !!zScoredData[i + 1].aboveZScore;
                const isNextBelowZScore =
                    !!zScoredData[i].aboveZScore && !zScoredData[i + 1].aboveZScore;
                const percent = ((i + 0.5) / (zScoredData.length - 1)) * 100;

                if (isNextAboveZScore) {
                    gradientPercents.push({ isAboveZScore: false, value: percent });
                }
                if (isNextBelowZScore) {
                    gradientPercents.push({ isAboveZScore: true, value: percent });
                }
            }
        });
        setGradientPercents(gradientPercents);
    }, [zScoredData]);

    return {
        gradientPercents,
    };
};
