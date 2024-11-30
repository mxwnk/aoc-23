const AOC_COOKIE = "AOC_COOKIE";
const cookie = Deno.env.get(AOC_COOKIE);

if (!cookie) {
    throw new Error(`${AOC_COOKIE} is not set!`);
}

export const config = { cookie };
