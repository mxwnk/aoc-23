import { config } from "./config.ts";

export const fetchPuzzleInput = async (day: number) => {
    const url = `https://adventofcode.com/2024/day/${day}/input`;
    const result = await fetch(url, {
        headers: { "Cookie": `session=${config.cookie}` },
    });
    if (!result.ok) {
        throw new Error(`Cannot fetch input data for ${day}`);
    }
    return await result.text();
};
