export type TChartData = {
    x: string;
    y: number;
};

export type TChartDataZScored = {
    x: string;
    y: number;
    aboveZScore: number | null;
    zScore: number;
};

export type TGradientPercent = {
    value: number;
    isAboveZScore: boolean;
};
