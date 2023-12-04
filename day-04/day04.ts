import * as fs from "fs";
import { isDigit, sum } from "../utils";

export function solveTask1(inputFilePath: string) {
    const input = fs.readFileSync(`./day-04/${inputFilePath}`, { encoding: "utf8" });
    const gameCards = input.split("\n");
    return gameCards.map(calculateWinningPoints).reduce(sum);
}

export function solveTask2(inputFilePath: string) {
    const input = fs.readFileSync(`./day-04/${inputFilePath}`, { encoding: "utf8" });
    const gameCards = input.split("\n");
    const result: Record<number, number> = {};
    for (let index = 0; index < gameCards.length; index++) {
        result[index + 1] = 1;
    }
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
    const winningNumbers = gamePart[0].split(" ").filter(isDigit);
    const myNumbers = gamePart[1].split(" ").filter(isDigit);
    const hits = myNumbers.filter(mn => winningNumbers.includes(mn)).length;
    if (hits == 0) {
        return 0;
    }
    return hits;
}

function calculateWinningPoints(gameCard: string) {
    const parts = gameCard.split(":");
    const gamePart = parts[1].split("|")
    const winningNumbers = gamePart[0].split(" ").filter(isDigit);
    const myNumbers = gamePart[1].split(" ").filter(isDigit);
    const hits = myNumbers.filter(mn => winningNumbers.includes(mn)).length;
    if (hits === 0) {
        return 0;
    }
    return doubleUp(hits);
}

const doubleUp = (n: number) => Math.pow(2, n - 1);
