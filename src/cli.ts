import { converter } from "./converter.ts";

function main() {
  const [inputFile, outputFile] = Deno.args;
  converter(inputFile, outputFile);
}
main();
