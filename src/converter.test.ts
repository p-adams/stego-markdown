import { assertEquals } from "https://deno.land/std@0.218.0/assert/mod.ts";
import { parseMarkdown } from "./converter.ts";

Deno.test("#converter", () => {
  assertEquals(parseMarkdown("##"), "<h2></h2>\n");
});
