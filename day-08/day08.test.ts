import { solveTask1, solveTask2 } from "./day08";

describe("Day 08", () => {
  it("should solve task 1 with example data", () => {
    const result = solveTask1("example.txt");
    expect(result).toBe(6);
  });

  it("should solve task 1 with real data", () => {
    const result = solveTask1("input.txt");
    console.log(result);
  });
  //
  // it("should solve task 2 with example data", () => {
  //   const result = solveTask2("example.txt");
  //   expect(result).toBe(0);
  // });
  //
  // it("should solve task 2 with real data", () => {
  //   const result = solveTask2("input.txt");
  //   console.log(result);
  // });
});
