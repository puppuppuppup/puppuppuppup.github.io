import { TChartDataZScored } from '../types/chart';

type Props = {
    payload: { payload: TChartDataZScored }[];
};

export const CustomTooltip = ({ payload }: Props) => {
    if (!payload || payload.length === 0 || !payload[0].payload) {
        return <></>;
    }

    const { aboveZScore, y, zScore } = payload[0].payload;
    const targetValue = aboveZScore || y;

    return (
        <div className='tooltip'>
            <span>Значение: {targetValue}</span>
            <span>Показатель z-score: {zScore}</span>
        </div>
    );
};
