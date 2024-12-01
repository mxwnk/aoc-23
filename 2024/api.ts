import { config } from "./config.ts";
import { Day } from "./utils/day.ts";

export const fetchPuzzleInput = async (day: Day) => {
    const url = `https://adventofcode.com/2024/day/${day.value()}/input`;
    const result = await fetch(url, {
        headers: { "Cookie": `session=${config.cookie}` },
    });
    if (!result.ok) {
        throw new Error(`Cannot fetch input data for ${day}`);
    }
    return await result.text();
};
