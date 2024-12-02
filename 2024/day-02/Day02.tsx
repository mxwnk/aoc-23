import { convertToGrid } from "../utils/string.ts";
import { isReportSaveWithTolerate } from "./day02.ts";

export default Day02;

function Day02({ input }: { input: string }) {
    const grid = convertToGrid(input);

    return (
        <>
            <h2>Day 02 - Part 2 Visualization</h2>
            {grid.map((row, i) => (
                <LevelRow key={i} level={row} />
            ))}
        </>
    )
}

function LevelRow({ level }: { level: number[] }) {
    const report = isReportSaveWithTolerate(level);
    return (
        <div style={{ color: report.isSafe ? 'green' : 'red', fontSize: '32' }}>
            {level.map((l, i) => {
                if (report.removedIndex === i) {
                    return <strong style={{ marginRight: '4px' }}>{l}</strong>
                }
                return <span key={i} style={{ marginRight: '4px' }}>{l}</span>
            })}
        </div>
    )
}
