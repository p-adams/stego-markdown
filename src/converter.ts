import { parse } from "https://deno.land/x/marked@1.0.2/mod.ts";

export function parseMarkdown(md: string) {
  return parse(md);
}

export async function converter(inputPath: string, outputPath: string) {
  // Read Markdown content from input file

  const markdownContent = await Deno.readTextFile(inputPath);

  // Convert Markdown to HTML
  const htmlContent = await parseMarkdown(markdownContent);

  // Read default HTML template

  const defaultTemplate = await Deno.readTextFile(
    "./src/templates/default.html"
  );

  // Insert HTML content into default template
  const finalHtmlContent = defaultTemplate.replace(
    "<!-- INSERT-->",
    htmlContent
  );

  // Write HTML content to output file

  await Deno.writeTextFile(outputPath, finalHtmlContent);
}
