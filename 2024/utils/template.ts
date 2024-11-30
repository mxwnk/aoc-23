const utf8Decoder = new TextDecoder("utf-8");

export async function copyTemplates(fileName: string, dayString: string) {
    const template = await Deno.readFileSync(`./template/${fileName}`);
    const content = utf8Decoder.decode(template).replaceAll("XX", dayString);
    await Deno.writeTextFileSync(
        `./day-${dayString}/${fileName.replace("XX", dayString)}`,
        content,
        { createNew: true },
    );
}
