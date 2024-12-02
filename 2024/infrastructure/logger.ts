// deno-lint-ignore-file no-explicit-any

export const log = {
    s: (msg: any) => print(msg, "success"),
    i: (msg: any) => print(msg, "info"),
    w: (msg: any) => print(msg, "warning"),
    e: (msg: any | any[]) => print(msg, "error"),
}

const print = (msg: any, logLevel: "success"| "info" | "warning" | "error") => {
    const time = new Date().toLocaleTimeString();
    const color = logLevelToColor[logLevel];
    const log = `[${colored(logLevel.toUpperCase(), color)}] ${colored(time, "black")} ${msg}`;
    console.log(log);
}

const colored = (msg: string, color: Color) => {
    const colorString = colors[color];
    return `${colorString}${msg}${colors.reset}`;
}

type Color = "red" | "yellow" | "blue" | "green" | "reset" | "black";
const colors: {[key in Color]: string} = {
    red: '\u001b[1;31m',
    yellow: '\u001b[1;33m',
    blue: '\u001b[1;34m',
    black: '\u001b[1;30m',
    green: '\u001b[1;32m',
    reset: '\u001b[0m'
};

const logLevelToColor = {
    "info": "blue",
    "warning": "yellow",
    "error": "red",
    "success": "green"
} as const;