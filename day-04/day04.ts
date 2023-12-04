import * as fs from "fs";
import { isDigit, sum } from "../utils";
import { createRecord } from "../utils/createRecord";

export function solveTask1(inputFilePath: string) {
    const input = fs.readFileSync(`./day-04/${inputFilePath}`, { encoding: "utf8" });
    const gameCards = input.split("\n");
    return gameCards.map(calculateWinningPoints).reduce(sum);
}

export function solveTask2(inputFilePath: string) {
    const input = fs.readFileSync(`./day-04/${inputFilePath}`, { encoding: "utf8" });
    const gameCards = input.split("\n");
    const result: Record<number, number> = createRecord(gameCards.length, 1);
    
    for (let index = 0; index < gameCards.length - 1; index++) {
        const gameCard = gameCards[index];
        const wins = calculateWins(gameCard);
        for (let i = 1; i <= wins; i++) {
            if (isNaN(result[index + i + 1])) {
                break;
            }
            result[index + i + 1] += result[index + 1];
        }
    }

    return Object.keys(result).map(k => result[k]).reduce(sum);
}

function calculateWins(gameCard: string) {
    const parts = gameCard.split(":");
    const gamePart = parts[1].split("|")
    const winningNumbers = new Set(gamePart[0].split(" ").filter(isDigit));
    const myNumbers = gamePart[1].split(" ").filter(isDigit);
    return myNumbers.filter(mn => winningNumbers.has(mn)).length;
}

function calculateWinningPoints(gameCard: string) {
    const wins = calculateWins(gameCard);
    if (wins === 0) {
        return 0;
    }
    return doubleUp(wins);
}

const doubleUp = (n: number) => Math.pow(2, n - 1);
