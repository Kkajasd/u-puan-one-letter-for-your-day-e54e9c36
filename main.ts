import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "Z";
if (LETTER.length !== 1 || !/^[A-Z]$/.test(LETTER)) throw new Error("entry must be exactly one A-Z letter");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
