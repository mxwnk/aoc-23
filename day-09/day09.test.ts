import { solveTask1, solveTask2 } from "./day09";

describe("Day 09", () => {
  it("should solve task 1 with example data", () => {
    const result = solveTask1("example.txt");
    expect(result).toBe(114);
  });

  it("should solve task 1 with real data", () => {
    const result = solveTask1("input.txt");
    console.log(result);
  });

  it("should solve task 2 with example data", () => {
    const result = solveTask2("example.txt");
    expect(result).toBe(2);
  });

  it("should solve task 2 with real data", () => {
    const result = solveTask2("input.txt");
    console.log(result);
  });
});
