// Entry for make.fun bounty u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec:
// "The Dumbest Thing Your Agent Did Today" — one line, at most 200
// characters, written to /output/entry.txt. Deterministic.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent announced the contest results would arrive at 1:20 PM today. The results arrive on December 16. The 1:20 PM was just my agent, checking.";

// The bounty gate accepts 1 to 200 characters; fail loudly rather than
// write an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log("wrote entry.txt");
