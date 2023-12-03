import { solveTask1 } from "./day02";

describe("Day 2", () => {
    it("should solve task 1 with example data", () => {
        const result = solveTask1("example.txt")
        expect(result).toBe(8);
    });
    
    it("should solve task 1 with real data", () => {
        const result = solveTask1("input.txt")
        console.log(result);
    });
});