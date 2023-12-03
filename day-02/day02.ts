import * as fs from "fs";

type Color = "red" | "green" | "blue";
const sum = (a: number, b: number): number => a + b;

export function solveTask1(inputFilePath: string) {
    const possibleGames: number[] = [];
    const lines = fs.readFileSync(`./day-02/${inputFilePath}`, { encoding: "utf8" });
    const games = lines.split("\n");
    for (const game of games) {
        const result = isGamePossible(game);
        if (result.isPossible) {
            possibleGames.push(result.id);
        }
    }
    console.log(possibleGames);
    return possibleGames.reduce(sum);
}

function isGamePossible(game: string): { isPossible: boolean, id: number } {
    const parts = game.split(":");
    const gameIdPart = parts[0];
    const id = parseInt(gameIdPart.replace("Game ", ""));

    const sets = parts[1];
    return isSetPossible(id, sets);
}

function isSetPossible(id, game: string) {
    console.log(game);
    
    const sets = game.split(";");
    for (const set of sets) {
        const cubesPerSet = getCubesPerSet(set);
        if (cubesPerSet.red > 12 || cubesPerSet.green > 13 || cubesPerSet.blue > 14) {
            return { isPossible: false, id };
        }
    }
    return { isPossible: true, id };
}

function getCubesPerSet(set: string) {
    const result = {
        "blue": 0,
        "green": 0,
        "red": 0
    };
    const reveals = set.split(",");

    for (const reveal of reveals) {
        if (reveal.includes("blue")) {
            result.blue += parseInt(reveal.replace(" blue", ""));
        } else if (reveal.includes("green")) {
            result.green += parseInt(reveal.replace(" green", ""));
        } else if (reveal.includes("red")) {
            result.red += parseInt(reveal.replace(" red", ""));
        }
    }
    return result;
}