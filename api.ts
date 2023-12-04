const puzzleInputUrl = (day: number) => `https://adventofcode.com/2023/day/${day}/input`

export const fetchPuzzleInput = async (day: number) => {
    const url = puzzleInputUrl(day);
    const result = await fetch(url, { headers: { "Cookie": `session=${process.env.AOC_COOKIE}` } });
    if (!result.ok) {
        throw new Error(`Cannot fetch input data for ${day}`);
    }
    return await result.text();
}