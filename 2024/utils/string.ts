export function convertToGrid(value: string, delimiter: string = " "): number[][] {
    return value.split('\n').map(row => row.split(delimiter).map(Number))
}
