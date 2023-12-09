import * as fs from "fs";
import { sum } from "../utils";

export function solveTask1(input: string) {
    const histories = fs.readFileSync(`./day-09/${input}`, { encoding: "utf8" }).split("\n").map(l => l.split(" ").map(Number));
    const extrapolatians: number[] = [];
    for (const history of histories) {
        const iterations = [history];
        let depth = 1;
        while (!allZero(iterations[depth - 1])) {
            for (let i = 0; i < iterations[depth - 1].length - 1; i++) {
                if (iterations[depth] === undefined) {
                    iterations[depth] = [];
                }
                iterations[depth].push(iterations[depth - 1][i + 1] - iterations[depth - 1][i])
            }
            depth++;
        }
        for (let i = iterations.length - 1; 0 < i; i--) {
            const currentIteration = iterations[i];
            const nextIteration = iterations[i - 1];
            const lastOfCurrent = currentIteration[currentIteration.length - 1];
            const lastOfNextIteration = nextIteration[nextIteration.length - 1];
            nextIteration.push(lastOfNextIteration + lastOfCurrent)
        }

        const firstIteration = iterations[0];
        const extrapolatian = firstIteration[firstIteration.length - 1];
        extrapolatians.push(extrapolatian)
    }
    return extrapolatians.reduce(sum);
}

const allZero = (array: number[]) => array.every(x => x === 0);

export function solveTask2(input: string) {
    return 0;
}