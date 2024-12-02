export const isDigit = (char: string) => !isNaN(parseInt(char));

type Sign = "positive" | "negative" | "zero";

export const checkSign = (value: number): Sign =>
    value > 0 ? "positive" : value < 0 ? "negative" : "zero";
