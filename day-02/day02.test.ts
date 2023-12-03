import { solveTask2 } from "./day02";

describe("Day 2", () => {
    it("should solve task 2 with example data", () => {
        const result = solveTask2("example.txt")
        expect(result).toBe(2286);
    });
    
    it("should solve task 2 with real data", () => {
        const result = solveTask2("input.txt")
        console.log(`Result: ${result}`);
    });
});