import { assertEquals } from "https://deno.land/std@0.218.0/assert/mod.ts";
import { converter } from "./converter.ts";

Deno.test("#converter", () => {
  assertEquals(converter("##"), "<h2></h2>\n");
});
