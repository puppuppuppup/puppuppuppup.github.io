export class Formatter {
    public static formatFloat(num: number, digits: number = 2) {
        return parseFloat(num.toFixed(digits));
    }
}
