import * as fs from "fs";

export function solveTask1(input: string) {
    const field: Position[][] = fs
        .readFileSync(`./day-10/${input}`, { encoding: "utf8" })
        .split("\n")
        .map((x, row) => x.split("").map((value, column) => ({ row, column, value })));
    let direction: Direction | undefined;
    direction = "east";
    let positionPointer = field.flatMap(x => x).filter(x => x.value === "S")[0];
    const path: Position[] = [positionPointer];
    while (direction) {
        console.log(positionPointer, direction);
        switch (direction) {
            case "east":
                positionPointer = field[positionPointer.row][positionPointer.column + 1];
                break;
            case "north":
                positionPointer = field[positionPointer.row - 1][positionPointer.column];
                break;
            case "south":
                positionPointer = field[positionPointer.row + 1][positionPointer.column];
                break;
            case "west":
                positionPointer = field[positionPointer.row][positionPointer.column - 1];
                break;
        }

        path.push(positionPointer);
        switch (positionPointer.value) {
            case "7":
                if (direction === "east") {
                    direction = "south";
                } else if (direction == "north") {
                    direction = "west";
                }
                break;
            case "J":
                if (direction === "west") {
                    direction = "north";
                } else if (direction == "south") {
                    direction = "west";
                }
                break;
            case "L":
                if (direction === "south") {
                    direction = "east";
                } else if (direction == "east") {
                    direction = "north";
                }
                break;
            case "F":
                if (direction === "north") {
                    direction = "east";
                } else if (direction == "west") {
                    direction = "south";
                }
                break;
            case "S":
                direction = undefined
                break;
        }
    }
    return path.length / 2;
}


type Direction = "north" | "south" | "west" | "east";

type Position = {
    row: number;
    column: number;
    value: string
}

export function solveTask2(input: string) {
    return 0;
}