import * as fs from "fs";
import { isDigit, sum } from "../utils";

export function solveTask2(inputFilePath: string) {
    const engineSchematic = fs.readFileSync(`./day-03/${inputFilePath}`, { encoding: "utf8" });
    const matrix: string[][] = engineSchematic.split("\n").map(rows => rows.split(""));
    const gears: number[] = [];
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        const row = matrix[rowIndex];
        for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
            const char = row[columnIndex];
            if (char !== "*") {
                continue;
            }
            const above = getPartNumbersInRange(matrix, rowIndex - 1, columnIndex - 1, 3)
            const left = getPartNumbersInRange(matrix, rowIndex, columnIndex - 1, 1)
            const right = getPartNumbersInRange(matrix, rowIndex, columnIndex + 1, 1)
            const below = getPartNumbersInRange(matrix, rowIndex + 1, columnIndex - 1, 3)
            const findings = [...above, ...left, ...right, ...below].filter(x => x !== undefined);
            if (findings.length != 2) {
                continue;
            }
            gears.push(parseInt(findings[0] as string) * parseInt(findings[1] as string));
        }
    }
    return gears.reduce(sum);
}

function getPartNumbersInRange(matrix: string[][], rowIndex: number, columnIndex: number, searchLength: number) {
    const partNumbers: string[] = [];
    const row = matrix[rowIndex];
    for (let index = columnIndex; index < searchLength + columnIndex; index++) {
        try {
            const char = row[index];
            let partNumber = "";
            if (!isDigit(char)) {
                continue;
            }
            partNumber = char;
            let left = index - 1;

            while (isDigit(row[left])) {
                partNumber = row[left] + partNumber;
                left--;
            }

            index++;
            while (isDigit(row[index])) {
                partNumber = partNumber + row[index];
                index++;
            }
            partNumbers.push(partNumber);

        } catch { }
    }
    return partNumbers;
}

export function solveTask1(inputFilePath: string) {
    const engineSchematic = fs.readFileSync(`./day-03/${inputFilePath}`, { encoding: "utf8" });
    const matrix: string[][] = engineSchematic.split("\n").map(rows => rows.split(""));
    const partNumbers = getAllPartNumbers(matrix);
    const partNumbersWithAdjacentSymbols = getAllNumbersWithAdjacentSymbols(matrix, partNumbers);
    return partNumbersWithAdjacentSymbols.reduce(sum);
}

function getAllPartNumbers(matrix: string[][]) {
    const partNumbers: PartNumber[] = [];
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        const row = matrix[rowIndex];
        let current: PartNumber | undefined = undefined;
        for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
            const char = row[columnIndex];
            if (!isNaN(parseInt(char))) {
                if (!current) {
                    current = { value: char, row: rowIndex, column: columnIndex };
                } else {
                    current.value += char;
                }
            } else {
                if (current) {

                    partNumbers.push({ ...current })
                    current = undefined;
                }
            }
        }
        if (current) {
            partNumbers.push({ ...current });
        }
    }
    return partNumbers;
}

function getAllNumbersWithAdjacentSymbols(matrix: string[][], partNumbers: PartNumber[]) {
    const partNumbersWithAdjacentSymbols: number[] = [];
    for (const partNumber of partNumbers) {
        const left = hasSymbolInRange(matrix, partNumber.row, partNumber.column - 1, 1);
        const right = hasSymbolInRange(matrix, partNumber.row, partNumber.column + partNumber.value.length, 1);
        const below = hasSymbolInRange(matrix, partNumber.row + 1, partNumber.column - 1, partNumber.value.length + 2);
        const above = hasSymbolInRange(matrix, partNumber.row - 1, partNumber.column - 1, partNumber.value.length + 2);
        if (left || right || below || above) {
            partNumbersWithAdjacentSymbols.push(parseInt(partNumber.value));
        }
    }
    return partNumbersWithAdjacentSymbols;
}

function hasSymbolInRange(matrix: string[][], rowIndex: number, columnIndex: number, searchLength: number) {
    const row = matrix[rowIndex];
    for (let index = columnIndex; index < searchLength + columnIndex; index++) {
        try {
            const char = row[index];
            if ("%*-#=@$/+&".includes(char)) {
                return true;
            }
        } catch { }
    }
    return false;
}

type PartNumber = {
    value: string;
    row: number;
    column: number;
}