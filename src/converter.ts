import { parse } from "https://deno.land/x/marked@1.0.2/mod.ts";

export function converter(md: string) {
  return parse(md);
}
