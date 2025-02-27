import { Formatter } from './formatter';

export class MathCounter {
    public static getAvg(data: number[]) {
        const sum = data.reduce((prev, current) => (prev += current), 0);
        const avg = sum / data.length;
        return Formatter.formatFloat(avg);
    }

    public static getDispersion(data: number[], avg: number = this.getAvg(data)) {
        const sum = data.reduce((prev, current) => (prev += Math.pow(current - avg, 2)), 0);
        const dispersion = Math.sqrt(sum / data.length);
        return Formatter.formatFloat(dispersion);
    }

    public static getZScore(
        x: number,
        data: number[],
        avg: number = this.getAvg(data),
        dispersion: number = this.getDispersion(data, avg),
    ) {
        const zScore = (x - avg) / dispersion;
        return Formatter.formatFloat(zScore);
    }
}
