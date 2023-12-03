import * as fs from "fs";

type Color = "red" | "green" | "blue";
const sum = (a: number, b: number): number => a + b;

export function solveTask2(inputFilePath: string) {
    const cubesMuliplied: number[] = [];
    const lines = fs.readFileSync(`./day-02/${inputFilePath}`, { encoding: "utf8" });
    const games = lines.split("\n");
    for (const game of games) {
        const result = getMinimumOfGame(game);
        console.log(result);
        cubesMuliplied.push(result.blue * result.green * result.red);
    }
    return cubesMuliplied.reduce(sum);
}

function getMinimumOfGame(game: string) {
    const parts = game.split(":");
    const gameIdPart = parts[0];
    const id = parseInt(gameIdPart.replace("Game ", ""));

    const sets = parts[1];
    return minimumOfCubes(id, sets);
}

function minimumOfCubes(id, game: string) {
    const minimum = {
        "blue": 0,
        "green": 0,
        "red": 0
    };
    const sets = game.split(";");
    for (const set of sets) {
        const cubesPerSet = getCubesPerSet(set);
        
        minimum.blue = Math.max(minimum.blue, cubesPerSet.blue);
        minimum.red = Math.max(minimum.red, cubesPerSet.red);
        minimum.green = Math.max(minimum.green, cubesPerSet.green);
    }
    return minimum;
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
            result.blue = parseInt(reveal.replace(" blue", ""));
        } else if (reveal.includes("green")) {
            result.green = parseInt(reveal.replace(" green", ""));
        } else if (reveal.includes("red")) {
            result.red = parseInt(reveal.replace(" red", ""));
        }
    }
    return result;
}